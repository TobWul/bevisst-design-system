import React from 'react'
import styles from './Sidebar.module.scss'
import MainNavDropdown from '../MainNavDropdown'

const Sidebar = ({ selectedPage, pages, setSelectedPage }) => {
  return (
    <nav className={styles.sidebar}>
      <MainNavDropdown />
      <ul>
        {pages.map(page => (
          <li
            onClick={() => setSelectedPage(page)}
            className={selectedPage === page && styles.selected}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
