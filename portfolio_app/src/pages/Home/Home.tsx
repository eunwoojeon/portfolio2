import React from 'react'
import styles from './Home.module.css'
import Navigation from '../../components/Navigation/Navigation'
import Section from '../../components/Section/Section'
import Intro from '../../components/Intro/Intro'

const Home: React.FC = () => {
  return (
    <div className={styles.homepage}>
      <Navigation />
      <Intro />
      <Section
        title='Introduction'
        contents='안녕하세요. 프론트엔드 개발자를 지향하는 전은우입니다.'
      />
      <Section
        title='Carear'
        contents=''
      />
    </div>
  )
}

export default Home