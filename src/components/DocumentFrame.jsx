export function DocumentFrame({ title, meta, description, href, embedSrc }) {
  return (
    <article className="document-frame">
      <div className="document-frame__header">
        <span className="document-frame__meta">{meta}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={href} target="_blank" rel="noreferrer">
          Жаңы өтмөктө ачуу
        </a>
      </div>

      <div className="document-frame__viewer">
        <iframe
          src={embedSrc}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </article>
  )
}
