# 울림통 아카이브

울림통 아카이브를 Vercel에서 배포할 수 있도록 Next.js 프로젝트로 구성했습니다.
기존 HTML 페이지와 Firebase 연결은 유지하되, 사진·영상은 Firebase Storage에서 제공합니다.

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

## 주요 경로

- `/` — 울림통 아카이브
- `/oolimtong_2026_wcf` — 울림통-변주 2026
- `/oolimtong_2026_ipo` — 이포중학교 협력창작 프로젝트
- `/children_workshop` — 니닉크라프트 어린이 작업실
- `/framework-status` — Next.js 실행 상태 확인용 페이지
