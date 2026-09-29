import Link from "next/link";
import styles from "../cave-of-the-solitary/page.module.css";

export const metadata = {
  title: "거인의 바위 | The Giant's Rock",
  description: "이포중학교 울림통 작품 ‘거인의 바위’의 NFC 영상입니다.",
};

export default function TheGiantsRockPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/oolimtong_2026_ipo" className={styles.backLink}>
          ← 이포중학교 울림통
        </Link>
        <div className={styles.titleGroup}>
          <p className={styles.eyebrow}>OOLIMTONG 2026 · NFC EXPERIENCE</p>
          <h1>거인의 바위</h1>
          <p lang="en">The Giant&apos;s Rock</p>
        </div>
      </header>

      <section className={styles.stage} aria-label="거인의 바위 영상">
        <div className={styles.videoFrame}>
          <video
            className={styles.video}
            controls
            playsInline
            preload="metadata"
            poster="/media/the-giants-rock-poster.png"
            aria-label="거인의 바위, 마이마 가얀디의 이야기"
          >
            <source src="/media/the-giants-rock.mp4" type="video/mp4" />
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
