import React from 'react'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import InstituttSelector from './components/InstituttSelector'
import styles from './App.module.scss'
import Layout from './components/Layout'
import Sokning from './pages/sokning'
import Opptak from './pages/opptak'
import Gjennomforing from './pages/gjennomforing'
import Internasjonalisering from './pages/internasjonalisering'
import Studiebarometeret from './pages/studiebarometeret'
import topThings from './topthings.svg'

const Router = ({ selectedPage, pages }) => {
  if (selectedPage === pages[0]) return <Sokning />
  else if (selectedPage === pages[1]) return <Opptak />
  else if (selectedPage === pages[2]) return <Gjennomforing />
  else if (selectedPage === pages[3]) return <Internasjonalisering />
  else if (selectedPage === pages[4]) return <Studiebarometeret />
  else return ''
}

function App() {
  const pages = [
    'Søkning og opptak',
    'Lokale opptak',
    'Gjennomføring',
    'Utveksling',
    'Studiebarometeret'
  ]
  const [selectedPage, setSelectedPage] = useState(pages[0])
  return (
    <div className={styles.app}>
      <img src={topThings} alt=" " className={styles.topThings} />
      <Sidebar
        pages={pages}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Layout>
        <InstituttSelector />
        <Router pages={pages} selectedPage={selectedPage} />
      </Layout>
    </div>
  )
}

export default App
