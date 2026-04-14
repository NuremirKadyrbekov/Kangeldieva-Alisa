import img from '../assets/teacher2.jpeg'
const profileItems = [
  { label: 'ФИО', value: 'Кангельдиева Алиса Акылбековна' },
  {
    label: 'Должность',
    value:
      'Түп районуна караштуу Калыс Эгембердиев атындагы №17 Сары-Тологой жалпы орто билим берүү мектебинде биология жана адам коом сабагынан мугалим',
  },
  { label: 'Туулган дата', value: '12.24.2001' },
  {
    label: 'Туулган жери',
    value: 'Ак-Суу районуна караштуу Жаңы-Арык айылы',
  },
  {
    label: 'Жашаган жери',
    value: 'Түп районуна караштуу Сары-Тологой айылы',
  },
  { label: 'Үй бүлөлүк абалы', value: 'Үй бүлөлү, 2 кыздын апасы' },
  { label: 'Жарандыгы', value: 'Кыргыз' },
  { label: 'Билими', value: 'Жогорку (магистрант)' },
  { label: 'Кесиби', value: 'Мугалим' },
  { label: 'Эмгек стажы', value: '3 жыл 6 ай' },
  { label: 'Иш тажрыйбасы', value: 'Иш тажрыйбам 2022-жылдын 1-сентябрынан тартып азыркы учурга чейин К.Эгембердиев мектебинде эмгектенем' },
  { label: 'Кайсыл тилдерди билет', value: 'кыргыз, орус' },
  { label: 'Телефон номер', value: '996703491442' },
]

const highlightTags = ['Биология', 'Адам коом', 'Магистрант', 'Сары-Тологой']

export function GeneralInfoPage() {
  return (
    <section className="info-page">
      <div className="info-page__hero">
        <div className="info-page__intro">
          <span className="layout-kicker">Жалпы маалымат</span>
          <h1>Кангельдиева Алиса Акылбековна</h1>
          <p className="info-page__lead">
            Түп районуна караштуу Калыс Эгембердиев атындагы №17 Сары-Тологой жалпы орто билим берүү
            мектебинде биология жана адам коом сабагынан мугалим.
          </p>

          <div className="info-page__tags">
            {highlightTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <aside className="info-page__summary">
          <figure className="info-page__portrait">
            <div className="info-page__portrait-media">
              <img
                className="info-page__portrait-image"
                src={img}
                alt="Кангельдиева Алиса Акылбековнанын сүрөтү"
              />
              <div className="info-page__portrait-fallback" aria-hidden="true">
                <span>Фото</span>
                <strong>Teacher Portrait</strong>
              </div>
            </div>

            <figcaption className="info-page__portrait-caption">
              <span className="layout-kicker layout-kicker--muted">Педагогдук портрет</span>
              {/* <p>
                Бул жерге мугалимдин профессионалдуу сүрөтү жайгаштырылат. Композиция сайттын
                азыркы премиум жана минималисттик стили менен шайкеш иштелген.
              </p> */}

              <div className="info-page__portrait-meta">
                <div className="info-page__portrait-meta-item">
                  <span>Негизги багыт</span>
                  <strong>Биология <br /> Адам жана коом
                  </strong>
                </div>
                <div className="info-page__portrait-meta-item">
                  <span>Иш орду</span>
                  <strong>№17 Сары-Тологой мектеби</strong>
                </div>
              </div>
            </figcaption>
          </figure>

          <div className="info-page__facts">
            {[
              ['Статус', 'Мугалим'],
              ['Тилдер', 'кыргыз, орус'],
              ['Билим', 'Жогорку (магистрант)'],
              ['Стаж', '3 жыл 6 ай'],
            ].map(([label, value]) => (
              <div key={label} className="info-page__fact-card">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <section className="info-page__details">
        <div className="info-page__details-header">
          <div>
            <span className="layout-kicker">Негизги маалыматтар</span>
            <h2>Профиль боюнча кыскача досье</h2>
          </div>
          <p>
            Маалыматтар тизмек түрүндө берилип, фото жана негизги көрсөткүчтөр менен бирге тез
            окула турган формада көрсөтүлөт.
          </p>
        </div>

        <dl className="info-page__grid">
          {profileItems.map((item) => (
            <div key={item.label} className="info-page__item">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </section>
  )
}
