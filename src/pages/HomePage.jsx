import { useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/teacher1.jpeg'


export function HomePage() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="home-page">
      <div className="home-page__content">
        <div className="home-page__copy">
          <span className="layout-kicker">Башкы бет</span>
          <h1>Кангельдиева Алиса Акылбековна</h1>
          <p className="home-page__role">
            Түп районуна караштуу Калыс Эгембердиев атындагы №17
            Сары-Тологой жалпы орто билим берүү мектебинде биология жана адам
            коом сабагынан мугалим
          </p>

          <div className="home-page__actions">
            <Link to="/jhalpy-maalymat" className="primary-button">
              Жалпы маалымат
            </Link>
            <Link to="/bilimi" className="secondary-button">
              Билими
            </Link>
          </div>
        </div>

        <div className="home-page__media">
          <div className="portrait-card">
            {!imageError ? (
              <img
                src={img}
                alt="Кангельдиева Алиса Акылбековна"
                className="portrait-card__image"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="portrait-card__placeholder" aria-hidden="true">
                <div className="portrait-card__halo" />
                <div className="portrait-card__avatar" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
