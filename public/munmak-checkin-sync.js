// 문막-흙으로 잇다 2026 현장 체크인 · 방명록 실시간 동기화
//
// 체크인 페이지 본문 스크립트(일반 스크립트)에서 window.MunmakCheckinSync 로 쓴다.
// 이 모듈이 아예 안 뜨거나(오프라인·차단) 로그인/규칙이 막혀 있어도 페이지는
// localStorage 모드로 계속 굴러가야 하므로, 실패는 전부 삼키고 상태로만 알린다.

import { firebaseConfig } from "./firebase-config.js";
import { getApp, getApps, initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  initializeFirestore,
  onSnapshot,
  persistentLocalCache,
  persistentMultipleTabManager,
  setDoc,
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const COLLECTION = "munmak2026_checkins";

const dataListeners = [];
const statusListeners = [];
let status = "connecting";
let statusDetail = "";
let db = null;

function setStatus(next, detail) {
  status = next;
  statusDetail = detail || "";
  statusListeners.forEach((fn) => {
    try {
      fn(status, statusDetail);
    } catch (e) {}
  });
}

async function start() {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  // 수목원 잔디광장은 신호가 약할 수 있다. 오프라인 캐시를 켜 두면 잠깐 끊겨도
  // 입력이 쌓였다가 신호가 돌아올 때 알아서 올라간다.
  try {
    db = initializeFirestore(app, {
      localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
    });
  } catch (e) {
    db = getFirestore(app);
  }

  // 익명 로그인이 꺼져 있어도 규칙이 열려 있으면 읽고 쓸 수 있으므로, 실패해도 그냥 진행한다.
  try {
    await signInAnonymously(getAuth(app));
  } catch (e) {}

  onSnapshot(
    collection(db, COLLECTION),
    { includeMetadataChanges: true },
    (snap) => {
      const entries = {};
      snap.forEach((d) => {
        entries[d.id] = d.data();
      });
      // 오프라인 캐시가 켜져 있으면 서버에 닿기 전에도 빈 스냅샷이 먼저 온다.
      // fromCache 가 false 로 바뀌어야 진짜 서버와 연결된 것이다.
      setStatus(snap.metadata.fromCache ? "offline" : "connected");
      dataListeners.forEach((fn) => {
        try {
          fn(entries);
        } catch (e) {}
      });
    },
    (err) => {
      setStatus("error", (err && err.code) || "unknown");
    },
  );
}

window.MunmakCheckinSync = {
  getStatus() {
    return status;
  },
  onData(fn) {
    dataListeners.push(fn);
  },
  onStatus(fn) {
    statusListeners.push(fn);
    try {
      fn(status, statusDetail);
    } catch (e) {}
  },
  // 오프라인이면 setDoc 은 신호가 돌아올 때까지 pending 이다. UI 는 로컬 상태로
  // 이미 갱신돼 있으니 결과를 기다리지 않는다.
  save(id, data) {
    if (!db) return Promise.reject(new Error("firestore not ready"));
    return setDoc(doc(db, COLLECTION, id), data);
  },
  remove(id) {
    if (!db) return Promise.reject(new Error("firestore not ready"));
    return deleteDoc(doc(db, COLLECTION, id));
  },
};

window.dispatchEvent(new Event("munmak-sync-ready"));

start().catch((err) => setStatus("error", (err && err.message) || "start failed"));
