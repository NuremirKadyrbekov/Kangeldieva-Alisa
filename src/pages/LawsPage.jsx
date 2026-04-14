import { DocumentFrame } from '../components/DocumentFrame'

const lawDocuments = [
  {
    title: 'Google Drive документ 1',
    description:
      'Документ түз эле баракчанын ичинде көрсөтүлөт, керек болсо өзүнчө да ачса болот.',
    href: 'https://drive.google.com/file/d/11N0vQBRgvEpreLkGLZGqFMDcdSkfZD3w/view',
    embedSrc: 'https://drive.google.com/file/d/11N0vQBRgvEpreLkGLZGqFMDcdSkfZD3w/preview',
    meta: 'Google Drive',
  },
  {
    title: 'Google Drive документ 2',
    description:
      'Экинчи материал дагы ошол эле беттин ичинде ыңгайлуу алдын ала көрүү менен берилет.',
    href: 'https://drive.google.com/file/d/1AL4IxC4tTV7tdTtADHFza9l9jeB0Si6Y/view',
    embedSrc: 'https://drive.google.com/file/d/1AL4IxC4tTV7tdTtADHFza9l9jeB0Si6Y/preview',
    meta: 'Google Drive',
  },
  {
    title: 'Кыргыз Республикасынын "Билим берүү жөнүндө" Мыйзамы',
    description:
      'Министрликтин расмий барагындагы мыйзамдын толук тексти бет ичинде көрсөтүлөт.',
    href: 'https://edu.gov.kg/organizations/8/pages/286/',
    embedSrc: 'https://edu.gov.kg/organizations/8/pages/286/',
    meta: 'edu.gov.kg',
  },
]

export function LawsPage() {
  return (
    <section className="laws-page">
      <div className="laws-page__hero">
        <span className="layout-kicker">Мыйзамдар</span>
        <h1>Билим берүү жаатындагы негизги документтер</h1>
        <p>
          Бул бөлүмдө сабак жүргүзүүдө жана педагогикалык ишмердүүлүктө таяныч
          боло турган мыйзамдык жана расмий документтер топтолду.
        </p>
      </div>

      <div className="document-list">
        {lawDocuments.map((document) => (
          <DocumentFrame key={document.href} {...document} />
        ))}
      </div>
    </section>
  )
}
