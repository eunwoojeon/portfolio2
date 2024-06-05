import React from 'react'
import styles from './Navigation.module.css'

const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <span>🧭 Portfolio</span>
      <img src={require('../../common/menu-icon.svg').default} style={{width: '2rem', height: '2rem'}} alt='Menu' />
    </nav>
  )
}

export default Navigation