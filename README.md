# 울림통 아카이브

울림통 아카이브를 Vercel에서 배포할 수 있도록 Next.js App Router 프로젝트로 구성했습니다.
모든 공개 페이지는 `app/` 아래의 Next.js 라우트로 빌드되며, 사진·영상은 Firebase Storage에서 제공합니다.

## 로컬 실행

`서버시작.bat`을 더블클릭하거나 터미널에서 아래 명령을 실행합니다.

```bash
npm install
npm run dev
```

사이트 주소는 `http://localhost:3000`입니다.

## Vercel 배포

1. 이 폴더를 Git 저장소에 올립니다.
2. Vercel에서 저장소를 가져옵니다.
3. Framework Preset이 `Next.js`인지 확인합니다.
4. 별도 설정 변경 없이 배포합니다.

기본 빌드 명령은 `npm run build`, 시작 명령은 `npm run start`입니다.

## 미디어 저장 구조

- Vercel 배포본에는 이미지·영상 파일이 포함되지 않습니다.
- 공개 미디어는 Firebase Storage의 `site-media/`에 저장됩니다.
- 웹 페이지는 Firebase Storage URL을 직접 사용하므로 Firestore 읽기 비용이 추가되지 않습니다.
- 원본 미디어는 로컬 `media-source/`에 보관되며 Git과 Vercel 배포에서 제외됩니다.
- 웹용으로 압축한 업로드 파일은 작업 중에만 `.tmp/`에 생성되며 배포되지 않습니다.
- Firebase Storage 경로 목록은 `tools/firebase-media-manifest.json`에 기록됩니다.

새 미디어를 추가할 때는 Storage에 업로드한 뒤 페이지에서 해당 Storage URL을 사용합니다.
브라우저에서 파일을 올리거나 지우는 기능은 제공하지 않으며, 업로드·삭제는 Firebase 관리자만 수행합니다.

## 페이지 구조

- 각 공개 주소는 `app/(ko)/` 또는 `app/(en)/` 아래의 `page.js`가 담당합니다.
- 기존 페이지의 본문·스타일·동작 코드는 `app/_content/`의 JavaScript 모듈로 분리했습니다.
- 공통 렌더링과 기존 동작 호환 처리는 `app/_components/`에서 담당합니다.
- `public/`에는 이미지·스타일시트·브라우저 스크립트 같은 정적 자산만 둡니다.
- 예전 `.html` 주소는 같은 내용의 확장자 없는 Next.js 주소로 영구 이동합니다.

## 주요 경로

- `/` — 울림통 아카이브
- `/oolimtong_2026_wcf` — 울림통-변주 2026
- `/oolimtong_2026_ipo` — 이포중학교 협력창작 프로젝트
- `/children_workshop` — 니닉크라프트 어린이 작업실
- `/framework-status` — Next.js 실행 상태 확인용 페이지
