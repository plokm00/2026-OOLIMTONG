// Firebase Console > Project settings > Your apps > Web app 의 설정값을 붙여 넣으세요.
// 이 값은 브라우저에 공개되는 식별 정보입니다. 서비스 계정 키는 절대 넣지 마세요.
export const firebaseConfig = {
  apiKey: "AIzaSyCj0lMmsElTrytjIAcoKx-1z-MS0UTsVAM",
  authDomain: "oolimtong-archive.firebaseapp.com",
  projectId: "oolimtong-archive",
  storageBucket: "oolimtong-archive.firebasestorage.app",
  messagingSenderId: "677419862467",
  appId: "1:677419862467:web:8a0a76b8f78d97b254d576"
};

export const isFirebaseConfigured = () =>
  Object.values(firebaseConfig).every((value) => typeof value === "string" && value.trim() !== "");
