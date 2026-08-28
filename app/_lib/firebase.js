import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 웹 설정은 공개 식별 정보입니다. 실제 데이터 접근 권한은
// Firebase Authentication과 firestore.rules에서 통제해야 합니다.
export const firebaseConfig = {
  apiKey: "AIzaSyCj0lMmsElTrytjIAcoKx-1z-MS0UTsVAM",
  authDomain: "oolimtong-archive.firebaseapp.com",
  projectId: "oolimtong-archive",
  storageBucket: "oolimtong-archive.firebasestorage.app",
  messagingSenderId: "677419862467",
  appId: "1:677419862467:web:8a0a76b8f78d97b254d576",
};

// Next.js 개발 모드의 빠른 새로고침에서도 앱을 중복 초기화하지 않습니다.
export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
