import React from 'react'
import styles from './Navigation.module.css'

const Navigation: React.FC = () => {
  return (
    <div className={styles.navigation}>
      <span>🧭 Portfolio</span>
      <img src={require('../../common/menu-icon.svg').default} width={32} height={32} alt='MENU' />
    </div>
  )
}

export default Navigation