import { mainExhibition } from "../_content/artist-exhibitions";
import { worksOf } from "../_content/artist-notes";
import ExhibitionPlaylist from "./exhibition-playlist";
import styles from "./artist-exhibition.module.css";

function ArtistNote({ note }) {
  const paragraphs = note.trim()
    .replace(/^작가\s*노트\s*\r?\n/, "")
    .split(/\r?\n[\t ]*\r?\n(?:[\t ]*\r?\n)*/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph && paragraph !== "---");

  return (
    <section className={styles.note} id="note" aria-labelledby="exhibition-note">
      <h2 className={styles.heading} id="exhibition-note">작가 노트</h2>
      {paragraphs.map((paragraph, index) => paragraph === "전시 계획" ? (
        <h3 key={index}>작업 당시의 전시 계획</h3>
      ) : (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
}

export default function ArtistExhibitionPage({ artist, exhibition, note }) {
  const { title, artworkAlt, material, dimensions, year, summary, bio, venue, tracks, photos } = exhibition;
  const media = `/artist-exhibition/${artist.id}`;
  const teamWorks = worksOf(artist.team);

  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="전시 탐색">
        <a className={styles.brand} href="/oolimtong_2026_wcf">
          울림통 <span>– 변주</span> <small>2026</small>
        </a>
        <a className={styles.navLink} href="/artist">시민작가 17인 <span aria-hidden="true">↗</span></a>
      </nav>

      <header className={styles.hero}>
        <figure className={styles.artwork}>
          <img src={`${media}/artwork.webp`} alt={artworkAlt} fetchPriority="high" />
        </figure>
        <div className={styles.intro}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.material}>{material}<br />{dimensions} · {year}</p>
          <p className={styles.summary}>{summary}</p>
          <div className={styles.artist}>
            <img className={styles.portrait} src={artist.photo} alt={`${artist.name} 프로필 사진`} width="300" height="375" />
            <div>
              <p className={styles.team}>팀 {artist.team}</p>
              <p className={styles.name}>{artist.name}</p>
              <p className={styles.bio}>{bio}</p>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.program}>
        <section aria-labelledby="monument-venue">
          <h2 className={styles.infoLabel} id="monument-venue">모뉴먼트 전시</h2>
          <p className={styles.venue}>{venue.name}</p>
          {venue.address && <p>{venue.address}</p>}
          <p className={styles.dates}>{venue.dates}</p>
        </section>
        <section aria-labelledby="main-venue">
          <h2 className={styles.infoLabel} id="main-venue">김아영 외 17인의 시민작가 본 전시</h2>
          <p className={styles.dates}>{mainExhibition.dates} <span>{mainExhibition.hours}</span></p>
          <ul className={styles.venues}>
            {mainExhibition.venues.map(({ name, address }) => (
              <li key={name}><strong>{name}</strong> <span>{address}</span></li>
            ))}
          </ul>
          <a className={styles.textLink} href="/oolimtong_2026_wcf">본 전시 자세히 보기 <span aria-hidden="true">↗</span></a>
        </section>
      </div>

      <ExhibitionPlaylist tracks={tracks.map(({ file, title }) => ({ src: `/artist-exhibition/music/${file}`, title }))} />

      {photos.length > 0 && (
        <section className={styles.workshop} aria-labelledby="workshop-heading">
          <h2 className={styles.heading} id="workshop-heading">작업 기록</h2>
          <div className={styles.photos}>
            {photos.map((alt, index) => (
              <img key={alt} src={`${media}/process-${index + 1}.webp`} alt={alt} decoding="async" loading="lazy" />
            ))}
          </div>
        </section>
      )}

      {note?.trim() && <ArtistNote note={note} />}

      {teamWorks.length > 0 && (
        <section className={styles.sharedWork} aria-labelledby="shared-work">
          <h2 className={styles.heading} id="shared-work">함께 만든 대형 울림통</h2>
          {teamWorks.map((work) => (
            <div key={work.team}>
              <h3>{work.title}</h3>
              <p>{work.note}</p>
            </div>
          ))}
        </section>
      )}

      <footer className={styles.footer}>
        <p>원주문화재단 보조금 지원사업</p>
        <div>
          <a href={`/oolimtong_2026_wcf_artists#${artist.id}`}>작가 노트 모아보기 ↗</a>
          <a href="/oolimtong_2026_wcf_record">팀별 작업 기록 ↗</a>
        </div>
      </footer>
    </main>
  );
}
