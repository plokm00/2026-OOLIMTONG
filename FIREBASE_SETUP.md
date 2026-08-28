# Firebase / Cloud Firestore 연결 안내

이 Next.js 앱은 Firebase 프로젝트 `oolimtong-archive`에 연결되어 있습니다.

- 앱 및 Firestore 초기화: `app/_lib/firebase.js`
- 프로젝트 선택: `.firebaserc`
- Firestore 보안 규칙: `firestore.rules`
- Storage 보안 규칙: `storage.rules`

Firebase 웹 설정값은 브라우저에 공개되는 프로젝트 식별 정보입니다. 서비스 계정 JSON 키, 관리자 비밀번호, 개인 키는 저장소에 넣지 마세요.

## 클라이언트 컴포넌트에서 사용하기

```js
"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../_lib/firebase";

await addDoc(collection(db, "workRecords"), {
  title: "작업 기록",
  createdAt: serverTimestamp(),
});
```

컬렉션과 문서는 첫 쓰기 때 자동으로 만들어집니다. 서버 전용 관리자 작업은 웹 SDK가 아닌 `firebase-admin`과 별도의 서비스 계정 구성이 필요합니다.

## 현재 보안 상태

`firestore.rules`는 인증 기능을 연결하기 전까지 모든 읽기와 쓰기를 차단합니다. 설정 확인을 이유로 공개 쓰기를 허용하지 마세요. 실제 저장 기능을 붙일 때 Firebase Authentication을 먼저 구성하고, 필요한 컬렉션에만 최소 권한을 부여해야 합니다.

## 규칙 배포

Firebase 프로젝트 관리 권한이 있는 계정으로 로그인한 환경에서 실행합니다.

```powershell
npx firebase-tools login
npx firebase-tools deploy --only firestore:rules,storage
```

사이트 배포는 현재 Vercel/Next.js 구성을 그대로 사용하며, Firebase는 Firestore와 Storage만 담당합니다.
