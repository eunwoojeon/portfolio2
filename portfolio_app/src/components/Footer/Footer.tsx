import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.flaticon.com/uicons">Flaticon</a>의 UIcon
    </footer>
  )
}

export default Footer