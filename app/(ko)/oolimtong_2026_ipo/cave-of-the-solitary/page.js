import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "은자의 굴 | Cave of the Solitary",
  description: "이포중학교 울림통 작품 ‘은자의 굴’의 NFC 영상입니다.",
};

export default function CaveOfTheSolitaryPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/oolimtong_2026_ipo" className={styles.backLink}>
          ← 이포중학교 울림통
        </Link>
        <div className={styles.titleGroup}>
          <p className={styles.eyebrow}>OOLIMTONG 2026 · NFC EXPERIENCE</p>
          <h1>은자의 굴</h1>
          <p lang="en">Cave of the Solitary</p>
        </div>
      </header>

      <section className={styles.stage} aria-label="은자의 굴 영상">
        <div className={styles.videoFrame}>
          <video
            className={styles.video}
            controls
            playsInline
            preload="metadata"
            poster="/media/cave-of-the-solitary-poster.webp"
            aria-label="은자의 굴, 마른귀의 이야기"
          >
            <source src="/media/cave-of-the-solitary.mp4" type="video/mp4" />
            이 브라우저에서는 영상을 재생할 수 없습니다.
          </video>
        </div>
        <p className={styles.hint}>재생 버튼을 눌러 소리와 함께 감상하세요.</p>
      </section>

      <footer className={styles.footer}>
        <span>울림통 협력창작 프로젝트</span>
        <span>이포중학교 · 2026</span>
      </footer>
    </main>
  );
}
