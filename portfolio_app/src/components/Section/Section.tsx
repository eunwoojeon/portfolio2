import React from 'react'
import styles from './Section.module.css'
import { Props, CarearProps, ProjectProps } from '../../model/types'

const Carear: React.FC<CarearProps> = ({ company, duration, description }) => {
  return (
    <div className={styles['carear-list']}>
      <div><span className={styles.company}>{company}</span><span className={styles.duration}>{duration}</span></div>
      <hr />
      <div>{description}</div>
    </div>
  )
}

const Project: React.FC<ProjectProps> = ({ description, skill, implement, github }) => {
  return (
    <div className={styles['project-list']}>
      <div><span>{description}</span></div>
      <hr />
      <div><span>Skill</span><span>{skill}</span></div>
      <div><span>주요 기능</span><span>{implement}</span></div>
      <div><span>Github</span><span>{github}</span></div>
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
        <Project description={project.description} skill={project.skill} implement={project.implement} github={project.github} />
      ))}
    </div>
  )
}

export default Section