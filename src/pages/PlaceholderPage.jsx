export function PlaceholderPage({ section }) {
  return (
    <section className="section-page">
      <div className="section-page__inner">
        <span className="layout-kicker">Section</span>
        <h1>{section.title}</h1>
      </div>
    </section>
  )
}
