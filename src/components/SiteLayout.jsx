import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { sections } from '../data/sections'
import '../App.css'

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="app-shell">
      <div
        className={`mobile-overlay ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <aside
        id="mobile-sidebar"
        className={`mobile-sidebar ${menuOpen ? 'is-open' : ''}`}
        aria-label="Мобилдик меню"
      >
        <div className="mobile-sidebar__header">
          <div>
            <span className="layout-kicker">Portfolio</span>
            <h2>Бөлүмдөр</h2>
          </div>
          <button
            type="button"
            className="sidebar-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Менюну жабуу"
          >
            x
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Мобилдик навигация">
          {sections.map((section) => (
            <NavLink
              key={section.path}
              to={section.path}
              end={section.path === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {section.title}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="page-shell">
        <header className="topbar">
          <NavLink to="/" end className="brand-mark">
            <span className="layout-kicker">Teacher Portfolio</span>
            <span className="brand-name">Мугалимдин жеке барагы</span>
          </NavLink>

          <nav className="desktop-nav" aria-label="Негизги навигация">
            {sections.map((section) => (
              <NavLink
                key={section.path}
                to={section.path}
                end={section.path === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : '')}
              >
                {section.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-sidebar"
            aria-label="Менюну ачуу"
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <main className="page-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
