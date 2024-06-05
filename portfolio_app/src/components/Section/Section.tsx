import React from 'react'
import styles from './Section.module.css'
import { Props, CarearProps, ProjectProps } from '../../model/types'

const Carear: React.FC<CarearProps> = ({ company, duration, description }) => {
  return (
    <div className={styles['carear-box']}>
      <div>
        <span className={styles['carear-name']}>{company}</span>
        <span className={styles['carear-duration']}>{duration}</span>
      </div>
      <hr />

      {description && <ul>
        {description.map((item: string) => (<li>{item}</li>))}
      </ul>}
    </div>
  )
}

const Project: React.FC<ProjectProps> = ({ name, skill, implement, github, link }) => {
  return (
    <div className={styles['project-box']}>
      <div>
        <span className={styles['project-name']}>{name}</span>
        <span className={styles['project-link']}>
          <a href={github} target='_blank'><img src={require('../../common/github-icon.svg').default} style={{ width: '1.5rem', height: '1.5rem' }} alt='Github' /></a>
          <a href={link} target='_blank'><img src={require('../../common/link-icon.svg').default} style={{ width: '1.5rem', height: '1.5rem' }} alt='Link' /></a>
        </span>
      </div>
      <hr />

      <div>
        <div>Skill</div>
        {skill && <div>
          {skill.map((item: string) => (<span className={styles['skill-box']} style={{backgroundColor: 'red'}}>{item}</span>))}
        </div>}
      </div>

      <div>
        <div>주요 기능</div>
        {implement && <ul>
          {implement.map((item: string) => (<li>{item}</li>))}
        </ul>}
      </div>
    </div>
  )
}

const Section: React.FC<Props> = ({ title, contents, carear, projects }) => {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      {contents && <div className={styles.contents}>{contents}</div>}
      {carear?.map((carear: CarearProps) => (
        <Carear company={carear.company} duration={carear.duration} description={carear.description} />
      ))}
      {projects?.map((project: ProjectProps) => (
        <Project name={project.name} skill={project.skill} implement={project.implement} github={project.github} link={project.link} />
      ))}
    </div>
  )
}

export default Section