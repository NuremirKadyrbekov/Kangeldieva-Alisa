import img from '../assets/teacher1.jpeg'

const principles = [
  {
    title: 'Изилдөөчүлүк дух',
    body:
      'Ар бир сабак — бул жаңы ачылыш. Мен окуучуларымды «Эмне үчүн?» жана «Кандайча?» деген суроолорду берүүгө үйрөтөм. Биология — бул китептеги текст эмес, бул тирүү дүйнө, ал эми коом — бул биздин күнүмдүк жашообуз. Окуучу байкап, талдап, жыйынтык чыгара билүүгө үйрөнүшү керек.',
  },
  {
    title: 'Илим менен турмуштун байланышы',
    body:
      'Адамдын организми, экология, коомдук мамилелер — булардын баары окуучунун жашоосуна түз байланыштуу. Мен ар бир теманы турмуш менен байланыштырганга аракет кылам, анткени түшүнүлгөн билим гана колдонулат.',
  },
  {
    title: 'Инсанга багытталган мамиле',
    body:
      'Ар бир окуучу — кайталангыс инсан. Кимдир бирөө анализди жакшы өздөштүрсө, башкалары практикалык иштерде өзүн көрсөтөт. Мен алардын ар биринин мүмкүнчүлүгүн эске алуу менен дифференциалдуу окутууну колдонуп, потенциалын ачууга аракет кылам.',
  },
  {
    title: 'Санариптик жана заманбап ыкмалар',
    body:
      'Бүгүнкү күндө биология жана коом таануу сабактарын заманбап технологияларсыз элестетүү мүмкүн эмес. Мен сабактарымда интерактивдүү материалдарды, визуалдык түшүндүрмөлөрдү жана санариптик ресурстарды колдонуп, окуучулардын кызыгуусун арттырам.',
  },
]


export function PhilosophyPage() {
  return (
    <section className="philosophy-page">
      <header className="philosophy-page__hero">
        <div className="philosophy-page__hero-grid">
          <div className="philosophy-page__hero-copy">
            <span className="layout-kicker">Менин педагогикалык философиям</span>
            <h1>«Адамды таануу — ааламды таануунун башаты»</h1>

            <blockquote>
              <span className="philosophy-page__quote-label">Концепция</span>
              <p>Менин концепциям: «Тажрыйба — Тааным — Түшүнүү»</p>
            </blockquote>
          </div>

          <figure className="philosophy-page__portrait">
            <div className="philosophy-page__portrait-frame">
              <img
                className="philosophy-page__portrait-image"
                src={img}
                alt="Кангельдиева Алиса Акылбековнанын сүрөтү"
              />
              <div className="philosophy-page__portrait-fallback" aria-hidden="true">
                <span>Фото</span>
                <strong>Teacher Portrait</strong>
              </div>
            </div>

            <figcaption className="philosophy-page__portrait-caption">
              <span className="layout-kicker">Инсанга багытталган мамиле</span>
           
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="philosophy-page__intro">
        <h2>Билимди түшүнүүгө айлантуу</h2>
        <p>
          Биология жана адам коом сабактары — бул жөн гана маалымат эмес, бул жашоону
          түшүнүүнүн негизи. Менин максатым — окуучуга фактыларды жаттатуу эмес, анын өзүнө,
          айлана-чөйрөгө жана коомго болгон аң-сезимдүү мамилесин калыптандыруу.
        </p>
      </section>

      <section className="philosophy-page__principles">
        {principles.map((principle) => (
          <article key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
          </article>
        ))}
      </section>

      <section className="philosophy-page__mission">
        <h2>Менин миссиям</h2>
        <p>
          Менин миссиям — жөн гана билим берүү эмес. Мен ойлонгон, анализ жасай алган, өз
          пикирин так билдирген жана коомдо өз ордун таба алган инсандарды тарбиялоону максат
          кылам.
        </p>
        <p>
          Биология адамдын табиятын үйрөтсө, коом таануу — анын коомдогу ордун түшүндүрөт.
          Ошондуктан мен үчүн билим — бул жөн гана илим эмес, бул жашоого даярдык.
        </p>

        <blockquote>
          <span className="philosophy-page__quote-label">Жыйынтык ой</span>
          <p>
            «Илим — бул түшүнүүнүн жолу, ал эми мугалим — ошол жолду туура көрсөтө билген
            жетектөөчү»
          </p>
        </blockquote>
      </section>
    </section>
  )
}
