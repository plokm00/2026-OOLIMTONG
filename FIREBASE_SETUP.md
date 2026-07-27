# Firebase 연결 안내

이 사이트는 별도의 빌드 과정이 없는 정적 HTML 사이트입니다. 따라서 Firebase의 브라우저 모듈 방식을 사용하도록 준비했습니다. Firebase 웹 앱 설정을 넣으면 `firebase-app.js`에서 Cloud Firestore를 사용할 수 있습니다.

## 1. Firebase 프로젝트와 웹 앱 만들기

1. [Firebase 콘솔](https://console.firebase.google.com/)에서 프로젝트를 만듭니다.
2. 프로젝트 개요에서 **웹 앱(</>)**을 등록합니다.
3. 표시되는 `firebaseConfig`의 값을 `2026 OOLIMTONG/firebase-config.js`에 넣습니다.
4. Firebase 콘솔에서 **Cloud Firestore** 데이터베이스를 만듭니다. 처음에는 운영 모드로 만드세요.

`firebaseConfig`는 웹 앱 식별용 설정이라 사이트에 포함되어도 됩니다. 단, 서비스 계정 JSON 키나 관리자 비밀번호는 절대로 이 저장소나 HTML에 넣으면 안 됩니다.

## 2. 페이지에서 Firestore 사용하기

데이터를 저장할 HTML 파일의 마지막 `</body>` 직전에 아래처럼 모듈 스크립트를 추가합니다.

```html
<script type="module">
  import { db, isFirebaseConfigured } from "./firebase-app.js";
  import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

  if (isFirebaseConfigured()) {
    await setDoc(doc(db, "workRecords", "example"), { updatedAt: new Date().toISOString() });
  }
</script>
```

실제 기록 저장 기능을 붙일 때는 공개 쓰기를 열지 말고, 먼저 Firebase Authentication으로 관리자 계정을 인증한 뒤 `firestore.rules`에서 그 계정만 쓰도록 제한하세요.

## 3. Hosting 배포 (선택)

Firebase CLI를 설치한 뒤, 이 저장소의 최상위 폴더에서 아래 순서로 실행합니다.

```powershell
firebase login
firebase use --add
firebase deploy --only hosting,firestore:rules
```

`firebase.json`은 `2026 OOLIMTONG` 폴더를 배포 대상으로 지정합니다. 현재의 Python 로컬 서버로도 Firebase 연결을 테스트할 수 있습니다.
