@echo off
cd /d "%~dp0"
echo.
echo  울림통 Next.js 사이트 시작 중...
if not exist node_modules (
  echo  처음 실행이라 필요한 파일을 설치합니다...
  call npm.cmd install
)
echo.
echo  브라우저에서 아래 주소로 접속하세요:
echo.
echo    http://localhost:3000
echo    http://localhost:3000/oolimtong_2026_ipo.html
echo.
echo  종료하려면 이 창을 닫으세요.
echo.
call npm.cmd run dev
pause
