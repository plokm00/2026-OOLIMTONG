import { applicationDefault, cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function credentialFromEnvironment() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) return applicationDefault();

  const serviceAccount = JSON.parse(raw);
  if (typeof serviceAccount.private_key === "string") {
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
  }
  return cert(serviceAccount);
}

export function getAdminDb() {
  const app = getApps()[0] ?? initializeApp({
    credential: credentialFromEnvironment(),
    projectId: process.env.FIREBASE_PROJECT_ID || "oolimtong-archive",
  });
  return getFirestore(app);
}
