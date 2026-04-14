const teacherPlatforms = [
  {
    name: 'Kahoot!',
    category: 'Викторина жана оюн форматындагы окуу',
    description:
      'Сабактагы кайталоо, кызыктыруу жана ыкчам текшерүү үчүн ыңгайлуу ылдам интерактивдүү тест платформасы.',
    href: 'https://kahoot.com/',
    embedSrc: 'https://kahoot.com/',
    accent: 'rgba(237, 128, 73, 0.16)',
    tag: 'Интерактивдүү тесттер',
  },
  {
    name: 'Quizizz',
    category: 'Практика жана баалоо',
    description:
      'Өз алдынча иштөө же түз эфирдеги викторина үчүн ылайыктуу, жыйынтыгы так көрүнгөн баалоо куралы.',
    href: 'https://quizizz.com/',
    embedSrc: 'https://quizizz.com/',
    accent: 'rgba(111, 132, 116, 0.16)',
    tag: 'Өз алдынча практика',
  },
  {
    name: 'Mugalim AI',
    category: 'Мугалим үчүн AI жардамчы',
    description:
      'Сабак идеяларын табуу, материал түзүү жана күнүмдүк педагогикалык иштерди тездетүү үчүн ыңгайлуу AI курал.',
    href: 'https://mugalim.ai/',
    embedSrc: 'https://mugalim.ai/',
    accent: 'rgba(63, 99, 146, 0.16)',
    tag: 'AI жардамчы',
  },
  {
    name: 'Bilim AI',
    category: 'Окуу колдоосу жана AI',
    description:
      'План түзүү, текст даярдоо жана окуучулар менен иштөөдө колдонууга ылайыктуу билим берүүгө багытталган AI платформа.',
    href: 'https://bilim.ai/',
    embedSrc: 'https://bilim.ai/',
    accent: 'rgba(125, 102, 72, 0.16)',
    tag: 'Билим берүү AI',
  },
  {
    name: 'Google Classroom',
    category: 'Классты башкаруу',
    description:
      'Тапшырмаларды, кулактандырууларды, материалдарды жана сабак процессин иреттүү башкаруу үчүн ишенимдүү база.',
    href: 'https://classroom.google.com/',
    embedSrc: 'https://classroom.google.com/',
    accent: 'rgba(66, 133, 244, 0.16)',
    tag: 'Иш агымы',
  },
  {
    name: 'Canva for Education',
    category: 'Дизайн жана контент даярдоо',
    description:
      'Презентация, жумуш баракчасы, плакат жана окуучулардын долбоорлору үчүн кеңири визуалдык мүмкүнчүлүк берет.',
    href: 'https://www.canva.com/education/',
    embedSrc: 'https://www.canva.com/education/',
    accent: 'rgba(186, 104, 200, 0.16)',
    tag: 'Визуалдык контент',
  },
  {
    name: 'Nearpod',
    category: 'Интерактивдүү сабактар',
    description:
      'Сабактын жүрүшүнө тапшырма, түшүнүү текшерүүсү жана визуалдык активдүүлүктү кошууга ыңгайлуу платформа.',
    href: 'https://nearpod.com/',
    embedSrc: 'https://nearpod.com/',
    accent: 'rgba(0, 151, 167, 0.16)',
    tag: 'Түз сабак',
  },
  {
    name: 'Padlet',
    category: 'Биргелешкен такта',
    description:
      'Окуучулардын ой жүгүртүүсүн, идея топтоосун, портфолиосун жана топтук иштерин уюштурууга ылайыктуу санариптик дубал.',
    href: 'https://padlet.com/',
    embedSrc: 'https://padlet.com/',
    accent: 'rgba(255, 183, 77, 0.18)',
    tag: 'Топтук иш',
  },
  {
    name: 'Edpuzzle',
    category: 'Видео аркылуу окутуу',
    description:
      'Видеого суроо, токтотуу жана текшерүү элементтерин кошуп, аны толук кандуу сабак материалына айландырат.',
    href: 'https://edpuzzle.com/',
    embedSrc: 'https://edpuzzle.com/',
    accent: 'rgba(121, 134, 203, 0.16)',
    tag: 'Видео сабак',
  },
  {
    name: 'Quizlet',
    category: 'Терминдер жана практика',
    description:
      'Флеш-карталар, дал келтирүү тапшырмалары жана өз алдынча кайталоо үчүн мугалимдер көп колдонгон платформа.',
    href: 'https://quizlet.com/',
    embedSrc: 'https://quizlet.com/',
    accent: 'rgba(46, 125, 50, 0.16)',
    tag: 'Кайталоо',
  },
]

const featuredPlatforms = teacherPlatforms.slice(0, 4)
const supportingPlatforms = teacherPlatforms.slice(4)

function PlatformCard({ platform, featured = false }) {
  return (
    <article className={`platform-card${featured ? ' platform-card--featured' : ''}`}>
      <div className="platform-card__copy">
        <span className="platform-card__tag">{platform.tag}</span>
        <h2>{platform.name}</h2>
        <p className="platform-card__category">{platform.category}</p>
        <p className="platform-card__description">{platform.description}</p>

        <div className="platform-card__links">
          <a href={platform.href} target="_blank" rel="noreferrer">
            Платформаны ачуу
          </a>
          <span>Эгер сайт iframe'ди чектесе, толук көрүнүш жаңы өтмөктө ачылат.</span>
        </div>
      </div>

      <div className="platform-card__viewer" style={{ '--platform-accent': platform.accent }}>
        <iframe
          src={platform.embedSrc}
          title={`${platform.name} preview`}
          loading="lazy"
          allow="clipboard-read; clipboard-write; fullscreen; autoplay"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="platform-card__fallback">
          <strong>{platform.name}</strong>
          <p>
            Эгер бул алдын ала көрүү ачылбаса, платформаны жанындагы баскыч аркылуу түз ачса болот.
          </p>
        </div>
      </div>
    </article>
  )
}

export function PlatformsPage() {
  return (
    <section className="platforms-page">
      <style>{`
        .platforms-page {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .platforms-page__hero,
        .platform-card,
        .platforms-page__note {
          border: 1px solid rgba(79, 94, 81, 0.12);
          border-radius: 32px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.72), rgba(246, 249, 245, 0.96)),
            radial-gradient(circle at top right, rgba(140, 159, 145, 0.12), transparent 30%);
          box-shadow: 0 28px 80px rgba(39, 52, 43, 0.08);
        }

        .platforms-page__hero,
        .platforms-page__note {
          padding: clamp(24px, 4vw, 36px);
        }

        .platforms-page__hero h1 {
          max-width: 14ch;
          margin: 12px 0 0;
          font-size: clamp(2.8rem, 6vw, 5rem);
          line-height: 0.96;
          letter-spacing: -0.05em;
          color: var(--text-strong);
        }

        .platforms-page__hero p,
        .platforms-page__note p,
        .platform-card__description,
        .platform-card__category,
        .platform-card__links span {
          color: var(--text-muted);
          line-height: 1.8;
        }

        .platforms-page__stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 24px;
        }

        .platforms-page__stats div {
          padding: 16px 18px;
          border-radius: 20px;
          background: rgba(111, 132, 116, 0.08);
          border: 1px solid rgba(79, 94, 81, 0.08);
        }

        .platforms-page__stats span,
        .platforms-page__stats strong {
          display: block;
        }

        .platforms-page__stats span {
          font-size: 0.76rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .platforms-page__stats strong {
          margin-top: 8px;
          color: var(--text-strong);
          line-height: 1.4;
        }

        .platforms-page__featured,
        .platforms-page__supporting {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .platforms-page__section-title {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .platforms-page__section-title h2 {
          margin: 0;
          font-size: clamp(1.35rem, 2vw, 1.9rem);
          color: var(--text-strong);
        }

        .platform-card {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
          gap: 20px;
          padding: 18px;
        }

        .platform-card--featured {
          align-items: stretch;
        }

        .platform-card__copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(14px, 2vw, 24px);
        }

        .platform-card__tag {
          display: inline-flex;
          width: fit-content;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(111, 132, 116, 0.1);
          color: var(--text-muted);
          font-size: 0.78rem;
        }

        .platform-card h2 {
          margin: 12px 0 0;
          font-size: clamp(1.4rem, 2vw, 2rem);
          line-height: 1.16;
          color: var(--text-strong);
        }

        .platform-card__category {
          margin-top: 10px;
          font-size: 0.94rem;
        }

        .platform-card__description {
          margin-top: 14px;
        }

        .platform-card__links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px 14px;
          margin-top: 20px;
        }

        .platform-card__links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 12px 18px;
          border-radius: 999px;
          background: #304137;
          color: #f7faf7;
          text-decoration: none;
        }

        .platform-card__viewer {
          position: relative;
          overflow: hidden;
          min-height: 420px;
          border-radius: 24px;
          border: 1px solid rgba(79, 94, 81, 0.08);
          background:
            linear-gradient(180deg, rgba(228, 236, 229, 0.98), rgba(246, 249, 245, 0.96)),
            radial-gradient(circle at top right, var(--platform-accent), transparent 40%);
        }

        .platform-card__viewer iframe {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 420px;
          border: 0;
          background: #fff;
        }

        .platform-card__fallback {
          position: absolute;
          inset: auto 16px 16px 16px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(245, 247, 244, 0.92);
          border: 1px solid rgba(79, 94, 81, 0.08);
          backdrop-filter: blur(10px);
          box-shadow: 0 16px 40px rgba(39, 52, 43, 0.08);
        }

        .platform-card__fallback strong {
          display: block;
          color: var(--text-strong);
        }

        .platform-card__fallback p {
          margin: 6px 0 0;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .platform-grid {
          display: grid;
          gap: 20px;
        }

        @media (max-width: 980px) {
          .platform-card {
            grid-template-columns: 1fr;
          }

          .platforms-page__stats {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .platforms-page__hero,
          .platforms-page__note,
          .platform-card {
            border-radius: 24px;
          }

          .platform-card__viewer,
          .platform-card__viewer iframe {
            min-height: 320px;
          }

          .platform-card__links {
            flex-direction: column;
            align-items: stretch;
          }

          .platform-card__links a {
            width: 100%;
          }
        }
      `}</style>

      <header className="platforms-page__hero">
        <span className="layout-kicker">Платформалар</span>
        <h1>Мен сабак өтүүдө колдонуп келген платформалар</h1>
        <p>
          Бул бөлүмдө мен көп колдонгон билим берүү платформалары ыңгайлуу, заманбап жана
          визуалдуу форматта берилди. Айрым платформалар iframe аркылуу түз ачылат, ал эми
          бөгөт коюлган учурларда дароо ачыла турган коопсуз шилтеме сакталат.
        </p>

        <div className="platforms-page__stats">
          <div>
            <span>Башкы топтом</span>
            <strong>4 негизги курал</strong>
          </div>
          <div>
            <span>Жалпы саны</span>
            <strong>10 платформа</strong>
          </div>
          <div>
            <span>Формат</span>
            <strong>Iframe жана түз шилтеме</strong>
          </div>
        </div>
      </header>

      <section className="platforms-page__featured">
        <div className="platforms-page__section-title">
          <span className="layout-kicker">Негизги</span>
          <h2>Башкы платформалар</h2>
        </div>

        <div className="platform-grid">
          {featuredPlatforms.map((platform) => (
            <PlatformCard key={platform.name} platform={platform} featured />
          ))}
        </div>
      </section>

      <section className="platforms-page__supporting">
        <div className="platforms-page__section-title">
          <span className="layout-kicker">Кошумча</span>
          <h2>Башка популярдуу куралдар</h2>
        </div>

        <div className="platform-grid">
          {supportingPlatforms.map((platform) => (
            <PlatformCard key={platform.name} platform={platform} />
          ))}
        </div>
      </section>

      <section className="platforms-page__note">
        <span className="layout-kicker">Эскертүү</span>
        <h2>Кээ бир сайттар iframe'ди чектеши мүмкүн</h2>
        <p>
          Эгер платформанын ички мазмуну дароо ачылбаса, бул көбүнчө провайдердин коопсуздук
          саясатынан болот. Ошондо дагы шилтеме аркылуу сайт толук ачылат жана барактагы
          визуалдык структура ошол бойдон калат.
        </p>
      </section>
    </section>
  )
}
