import React from 'react'
import Header from '../components/Header'
import LayoutPage from '../components/Layout'

const skills = [
  'Kotlin',
  'Clojure',
  'ClojureScript',
  'HTML',
  'CSS',
  'Functional Programming',
  'TypeScript',
  'JavaScript',
  'React',
  'NodeJS',
  'TailwindCSS',
  'Elixir',
  'PostgreSQL',
  'Docker',
  'Serverless',
  'AWS Lambda',
  'NextJS',
  'PostCSS',
  'SASS',
  'Kong',
  'GraphQL',
  'Rest',
]

const generalSkills = [
  'Git',
  'TDD',
  'Scrum',
  'Kanban',
  'CI',
  'CD',
  'Gitflow',
  'Monorepo Projects',
  'Multirepo Projects',
  'Microservices',
  'SOLID',
  'Jira',
]

const SkillCard = ({ skill }: { skill: string }) => (
  <li className="pt-1 col-span-2 flex flex-full items-baseline md:flex-none">
    <span className="pr-2 leading-tight text-xl">{skill}</span>
  </li>
)

const SkillsContent = () => {
  const TechnicalSkills = skills.map((skill, index) => {
    return <SkillCard skill={skill} key={`${index}-${skill}`} />
  })

  const GeneralSkills = generalSkills.map((skill, index) => {
    return <SkillCard skill={skill} key={`${index}-${skill}`} />
  })

  return (
    <main className="bg-primary-600 flex-full lg:flex-auto text-white flex-wrap pt-10 pl-4 pb-2 text-4xl lg:text-6xl lg:p-6 ">
      <h1 className="text-support-positive-800">Habilidades</h1>
      <h2 className="text-3xl text-support-success-050">
        Conocimientos técnicos
      </h2>
      <ul className="md:grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 lg:text-3xl md:justify-between">
        {TechnicalSkills}
      </ul>
      <br />
      <h2 className="text-3xl text-support-success-050">
        Conocimientos transversales
      </h2>
      <ul className="pb-4 lg:pb-0 md:grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 lg:text-3xl md:justify-between">
        {GeneralSkills}
      </ul>
    </main>
  )
}

const Skills = () => (
  <LayoutPage>
    <Header />
    <SkillsContent />
  </LayoutPage>
)

export default Skills
