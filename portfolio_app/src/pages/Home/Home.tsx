import React from 'react'
import styles from './Home.module.css'
import Navigation from '../../components/Navigation/Navigation'
import Section from '../../components/Section/Section'
import Intro from '../../components/Intro/Intro'
import { Props, ProjectProps } from '../../model/types'

const Home: React.FC = () => {
  return (
    <div className={styles.homepage}>
      <Navigation />
      <main>
        <Intro />
        <Section
          title='Introduction'
          contents='안녕하세요. 프론트엔드 개발자를 지향하는 전은우입니다.'
        />
        <Section
          title='Carear'
          carear={[
            {
              company: "스트라토아이티",
              duration: "2022-07~2023-3",
              description: "설명"
            },
            {
              company: "프로텍",
              duration: "2023-3~2023-11",
              description: "설명"
            }
          ]}
        />
        <Section
          title='Project'
          projects={[
            {
              description: '테트리스',
              skill: 'javascript',
              implement: '- dddd',
              github: 'www'
            },
            {
              description: '테트리스',
              skill: 'javascript',
              implement: '- dddd',
              github: 'www'
            }
          ]}
        />
      </main>
    </div>
  )
}

export default Home