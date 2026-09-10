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

## 작가 노트 고유 편집 링크

작가 노트는 브라우저 SDK가 아니라 Next.js 서버의 Firebase Admin SDK를 통해 저장합니다.
Vercel에는 다음 서버 전용 환경변수를 설정합니다.

- `FIREBASE_SERVICE_ACCOUNT_JSON` — Firebase 서비스 계정 JSON 전체

`FIREBASE_PROJECT_ID`는 코드에서 `oolimtong-archive`를 기본값으로 사용하므로 별도 등록이 필요하지 않습니다.

AI 초안은 Vercel AI Gateway의 OIDC 토큰으로 Claude Sonnet을 호출합니다. Vercel 배포에서는 빌드·로컬 개발용 `VERCEL_OIDC_TOKEN` 또는 함수 요청의 `x-vercel-oidc-token` 헤더가 자동으로 제공되므로 별도의 Anthropic 또는 OpenAI API 키를 만들거나 저장하지 않습니다. 로컬에서 AI 생성까지 시험할 때만 `AI_GATEWAY_API_KEY`를 사용할 수 있습니다.

서비스 계정 JSON과 `artist-note-links.private.json`은 Git에 올리지 않습니다. 편집 링크의 SHA-256 해시와 작가 ID 연결 정보도 공개 코드가 아닌 Firestore의 서버 전용 `artistNoteInvites` 컬렉션에 저장합니다. 각 작가에게는 `artist-note-links.private.json`의 `link` 값만 전달합니다. 링크는 `/artist-note/작가-ID#16자리-비밀코드` 형식이며, 작가 ID는 식별용이고 `#` 뒤 코드는 편집 권한을 보호합니다. 유효한 링크를 처음 열면 해당 작가의 빈 편집 문서가 자동으로 생성됩니다. 링크를 다시 발급할 때는 기존 문서를 새 토큰 해시로 안전하게 이전합니다.

`artist-note-links.private.json`의 `testArtists`에는 공개 작가 목록에 나타나지 않는 `가상 작가 A` 점검용 링크가 있습니다. 실제 작가 자료를 건드리지 않고 답변 저장과 AI 생성을 시험할 때 사용합니다.
