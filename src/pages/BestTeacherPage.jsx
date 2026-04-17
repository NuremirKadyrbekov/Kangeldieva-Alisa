const videoUrl = 'https://www.youtube.com/watch?v=TumJpwt0QbE'
const videoEmbedUrl = 'https://www.youtube.com/embed/TumJpwt0QbE?si=toNNRdkgJYPRyFO8'
const documentUrl = 'https://drive.google.com/file/d/1bu__gz1WfrywoPdH1upBRsZMATqgyxJp/view?usp=sharing'
const documentEmbedUrl = 'https://drive.google.com/file/d/1bu__gz1WfrywoPdH1upBRsZMATqgyxJp/preview'
import img from '../assets/teacher3.jpeg'

const sections = [
  {
    title: 'Кесиптик өсүш — менин тандоом эмес, милдетим:',
    body:
      'Бүгүнкү мугалим жөн гана билим берүүчү эмес — ал өзгөрүүлөрдүн демилгечиси болушу керек. Мен бул конкурска өзүмдү текшерүү үчүн эмес, өз деңгээлимди далилдөө жана андан да жогору көтөрүү үчүн катышып жатам. Мен үчүн токтоп калуу — артка кетүү менен барабар.',
  },
  {
    title: 'Айылдык мектептен — сапаттуу билимдин жаңы стандарты:',
    body:
      'Түп районуна караштуу Сары-Тологой айылындагы мектепте иштеп жатып, мен бир нерсени так түшүндүм: сапат шаарга байланыштуу эмес, мугалимге байланыштуу. Биология жана адам коом сабактары аркылуу мен окуучуларга жөн гана теория эмес, ой жүгүртүү, анализ жана турмушта колдонулуучу билим берүүнү максат кылам.',
  },
  {
    title: 'Мен — жөн гана мугалим эмес, багыт берүүчүмүн:',
    body:
      'Окуучуларым менден сөз эмес, иш күтөт. Ошондуктан мен өз мисалым менен көрсөтөм: өнүгүү — бул тандоо эмес, бул жоопкерчилик. Мен аларга коркпостон аракет кылууну үйрөтөм, анткени келечек даяр болгондорго эмес, аракет кылгандарга таандык.',
  },
  {
    title: 'Жоопкерчилик — менин принципим:',
    body:
      'Калыс Эгембердиев атындагы №17 Сары-Тологой жалпы орто билим берүү мектебинин мугалими катары, мен өз мектебимдин деңгээлин көтөрүү — бул жеке амбициям эмес, бул менин милдетим деп эсептейм. Менин ар бир жетишкендигим — бул мен иштеген мектептин жетишкендиги.',
  },
]

export function BestTeacherPage() {
  return (
    <section className="best-teacher-page">
      <div className="best-teacher-page__hero">
        <span className="layout-kicker">Мыкты мугалим 2026</span>
        <h1>Эмне үчүн мен “Мыкты мугалим” конкурсуна катышып жатам?</h1>
        <p className="best-teacher-page__lead">
          Бул бөлүм мугалимдин кесиптик позициясын, жоопкерчилигин жана өз ишине болгон
          мамилесин көрсөтөт.
        </p>
      </div>

      <div className="best-teacher-page__content">
        <article className="best-teacher-page__article">
          {sections.map((section) => (
            <section key={section.title} className="best-teacher-page__block">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <blockquote className="best-teacher-page__quote">
            <p>
              “Бул конкурс — жеңиш үчүн жарыш эмес. Бул — өз позициямды, өз деңгээлимди жана
              мугалим катары жоопкерчилигимди көрсөтө турган аянт. Мен бул жакка катышуу үчүн
              эмес, таасир калтыруу үчүн келдим.”
            </p>
          </blockquote>
        </article>

        <aside className="best-teacher-page__aside">
          <section className="best-teacher-page__portrait">
            <span className="layout-kicker">Фото</span>
            <div className="best-teacher-page__portrait-frame">
              <img
                src={img}
                alt="Кангельдиева Алиса Акылбековнанын сүрөтү"
                className="best-teacher-page__portrait-image"
              />
            </div>
            <div className="best-teacher-page__portrait-meta">
              <h2>Кангельдиева Алиса Акылбековна</h2>
              <p>
                Түп районуна караштуу Калыс Эгембердиев атындагы №17 Сары-Тологой жалпы орто
                билим берүү мектебинде биология жана адам коом сабагынан мугалим.
              </p>
            </div>
          </section>

          <span className="layout-kicker">Видео</span>
          <h2>Презентациялык YouTube шилтеме</h2>
          <p>
            Видео түз эле баракчанын ичинде көрсөтүлөт. Кааласаңыз аны өзүнчө YouTube
            барагында да ачууга болот.
          </p>

          <div className="best-teacher-page__video-frame">
            <iframe
              src={videoEmbedUrl}
              title="Мыкты мугалим 2026 видеосу"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <a className="best-teacher-page__video-link" href={videoUrl} target="_blank" rel="noreferrer">
            YouTube'та ачуу
          </a>

          <section className="best-teacher-page__document">
            <span className="layout-kicker">Документ</span>
            <h2>Мыкты мугалим 2026 боюнча материал</h2>
            {/* <p>Бул бөлүмдө конкурска тиешелүү документти түз көрүп жана өзүнчө терезеде ачып алсаңыз болот.</p> */}
            <div className="best-teacher-page__document-frame">
              <iframe
                src={documentEmbedUrl}
                title="Мыкты мугалим 2026 документи"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a className="best-teacher-page__document-link" href={documentUrl} target="_blank" rel="noreferrer">
              Документти ачуу
            </a>
          </section>
        </aside>
      </div>
    </section>
  )
}
