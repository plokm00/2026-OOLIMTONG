import Link from "next/link";
import styles from "../cave-of-the-solitary/page.module.css";

export const metadata = {
  title: "여신의 첨성대 | Observatory of the Goddess",
  description: "이포중학교 울림통 작품 ‘여신의 첨성대’의 NFC 영상입니다.",
};

export default function ObservatoryOfTheGoddessPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/oolimtong_2026_ipo" className={styles.backLink}>
          ← 이포중학교 울림통
        </Link>
        <div className={styles.titleGroup}>
          <p className={styles.eyebrow}>OOLIMTONG 2026 · NFC EXPERIENCE</p>
          <h1>여신의 첨성대</h1>
          <p lang="en">Observatory of the Goddess</p>
        </div>
      </header>

      <section className={styles.stage} aria-label="여신의 첨성대 영상">
        <div className={styles.videoFrame}>
          <video
            className={styles.video}
            controls
            playsInline
            preload="metadata"
            poster="/media/observatory-of-the-goddess-poster.png"
            aria-label="여신의 첨성대, 별을 맡은 셋째 여신의 이야기"
          >
            <source src="/media/observatory-of-the-goddess.mp4" type="video/mp4" />
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
