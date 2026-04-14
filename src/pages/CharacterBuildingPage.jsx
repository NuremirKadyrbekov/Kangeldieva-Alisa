import { DocumentFrame } from '../components/DocumentFrame'

const tarbiyaDocuments = [
  {
    title: 'Тарбиялык материал 1',
    description:
      'Бул тарбиялык материал баракчанын ичинде дароо көрүнөт жана өзүнчө да ачылат.',
    href: 'https://drive.google.com/file/d/1Qn2IFDDdUuDqaJOAt9K2xkZtypNcvTAl/view?usp=drive_link',
    embedSrc: 'https://drive.google.com/file/d/1Qn2IFDDdUuDqaJOAt9K2xkZtypNcvTAl/preview',
    meta: 'Google Drive',
  },
  {
    title: 'Тарбиялык материал 2',
    description:
      'Класстык жана тарбиялык иштерге ылайыктуу экинчи материал да түз көрсөтүлөт.',
    href: 'https://drive.google.com/file/d/18X_dctC385RRZOZ5kiE-a6eWSISgEiHr/view?usp=drive_link',
    embedSrc: 'https://drive.google.com/file/d/18X_dctC385RRZOZ5kiE-a6eWSISgEiHr/preview',
    meta: 'Google Drive',
  },
]

export function CharacterBuildingPage() {
  return (
    <section className="laws-page" aria-labelledby="tarbiya-title">
      <div className="laws-page__hero">
        <span className="layout-kicker">Тарбия</span>
        <h1 id="tarbiya-title">Тарбиялык жана класстык сааттар үчүн материалдар</h1>
        <p>
          Бул бөлүмдө тарбиялык иштерге ылайыкталган эки материал ыңгайлуу жана
          таза форматта берилди. Ар бир файл өзүнчө карточка аркылуу ачылат.
        </p>
      </div>

      <div className="document-list">
        {tarbiyaDocuments.map((document) => (
          <DocumentFrame key={document.href} {...document} />
        ))}
      </div>
    </section>
  )
}
