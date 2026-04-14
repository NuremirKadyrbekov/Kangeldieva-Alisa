import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { sections } from './data/sections'
import { BestTeacherPage } from './pages/BestTeacherPage'
import { CharacterBuildingPage } from './pages/CharacterBuildingPage'
import { EducationPage } from './pages/EducationPage'
import { GeneralInfoPage } from './pages/GeneralInfoPage'
import { HomePage } from './pages/HomePage'
import { LawsPage } from './pages/LawsPage'
import { PhilosophyPage } from './pages/PhilosophyPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { PlatformsPage } from './pages/PlatformsPage'
import { StandardsPage } from './pages/StandardsPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {sections.map((section) => {
          let element = <PlaceholderPage section={section} />

          if (section.path === '/') {
            element = <HomePage />
          } else if (section.path === '/jhalpy-maalymat') {
            element = <GeneralInfoPage />
          } else if (section.path === '/bilimi') {
            element = <EducationPage />
          } else if (section.path === '/mykty-mugalim-2026') {
            element = <BestTeacherPage />
          } else if (section.path === '/myizamdar') {
            element = <LawsPage />
          } else if (section.path === '/predmettik-standarttar') {
            element = <StandardsPage />
          } else if (section.path === '/pedagogikalyk-filosofiya') {
            element = <PhilosophyPage />
          } else if (section.path === '/tarbiyalyk-saattar') {
            element = <CharacterBuildingPage />
          } else if (section.path === '/platformalar') {
            element = <PlatformsPage />
          }

          return (
            <Route key={section.path} path={section.path} element={element} />
          )
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
