import React from 'react'
import styles from './Section.module.css'
import { Props, ProjectProps } from '../../model/types'

const Project: React.FC<ProjectProps> = ({ intro, skill, implement, github }) => {
  return (
    <div>
      <div><span>Intro</span><span>{intro}</span></div>
      <div><span>Skill</span><span>{skill}</span></div>
      <div><span>주요 기능</span><span>{implement}</span></div>
      <div><span>Github</span><span>{github}</span></div>
    </div>
  )
}

const Section: React.FC<Props> = ({ title, contents, project }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{contents}</div>
      {(project !== undefined) ? <Project intro={project.intro} skill={project.skill} implement={project.implement} github={project.github}/> : null}
    </div>
  )
}

export default Section