import { DocumentFrame } from '../components/DocumentFrame'

const documentFacts = [
  { label: 'Түрү', value: 'Расмий предметтик стандарт' },
  {
    label: 'Аткаруучу',
    value: 'КР Агартуу министрлиги / Кыргыз билим берүү академиясы',
  },
  { label: 'Камтуусу', value: 'Биология, 7-12-класстар' },
  { label: 'Форматы', value: 'PDF документ' },
]

export function StandardsPage() {
  return (
    <section className="standards-page" aria-labelledby="standards-title">
      <div className="standards-page__hero">
        <span className="layout-kicker">Предметтик стандарттар</span>
        <h1 id="standards-title">
          ПРЕДМЕТТИК СТАНДАРТ «БИОЛОГИЯ» жалпы билим берүүчү уюмдарынын
          7-12-класстары үчүн
        </h1>
        <p>
          Бул расмий документ биология сабагын 7-12-класстарда окутуунун
          мазмунун, күтүлгөн натыйжаларын жана баалоо логикасын аныктайт.
        </p>
      </div>

      <div className="standards-page__stats">
          {documentFacts.map((fact) => (
            <div key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
      </div>

      <DocumentFrame
        title="Расмий PDF версиясы"
        meta="Негизги документ"
        description="Документте предметтин концепциясы, максаттары, компетенттүүлүктөрү, мазмундук багыттары, окутуу методикасы жана баалоо талаптары чагылдырылган."
        href="https://edu.gov.kg/media/uploads/2025/10/20/edfnxd.pdf"
        embedSrc="https://edu.gov.kg/media/uploads/2025/10/20/edfnxd.pdf"
      />
    </section>
  )
}
