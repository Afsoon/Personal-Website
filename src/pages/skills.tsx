import React, { useState } from 'react'
import {
  IconUser,
  IconBriefcase,
  IconGraphBar,
  IconHome,
  Github,
  Linkedin,
} from '../icons'
import '../style.css'

const Header = () => {
  const [showOptions, setShowOptions] = useState(false)
  const display = showOptions ? 'flex' : 'hidden'
  return (
    <header className="sticky top-0 bg-primary-700 text-white flex flex-wrap md:flex-no-wrap md:items-center lg:flex-col lg:w-24 lg:flex-auto lg:flex-grow-0 lg:flex-shrink-0 lg:items-stretch">
      <div className="flex flex-full md:flex-none md:flex-col">
        <a
          href="/"
          className="bg-primary-900 flex flex-col items-center p-1 lg:pt-1 lg:pb-1"
        >
          <img src="/logo.png" alt="Logo of the website" />
          <span className="font-bold text-xl">Said</span>
        </a>
        <button
          className="ml-auto p-1 md:hidden"
          onClick={() => {
            setShowOptions(!showOptions)
          }}
        >
          Menu
        </button>
      </div>
      <nav
        className={`h-12 justify-between p-4 flex-full ${display} md:flex md:justify-around  md:flex-1 lg:flex lg:flex-col lg:justify-center`}
      >
        <a
          href="/"
          className="group self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4"
        >
          <IconHome />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Home
          </span>
        </a>
        <a
          href="/about"
          className="group self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4"
        >
          <IconUser />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            About
          </span>
        </a>
        <a
          href="/skills"
          className="group text-support-positive-800 self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4"
        >
          <IconGraphBar />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Skills
          </span>
        </a>
        <a
          href="/"
          className="group self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4"
        >
          <IconBriefcase />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Projects
          </span>
        </a>
      </nav>
      <nav className="hidden lg:flex lg:flex-col lg:flex-1/10 lg:p-1 lg:justify-around">
        <a href="/" className="lg:self-center lg:h-12">
          <Github />
        </a>
        <a href="/" className="lg:self-center lg:h-12">
          <Linkedin />
        </a>
      </nav>
    </header>
  )
}

const skills = {
  Kotlin: 2,
  Clojure: 3,
  ClojureScript: 2,
  HTML: 3,
  CSS: 2,
  'Functional Programming': 2,
  Git: 3,
  TypeScript: 2,
  JavaScript: 3,
  React: 3,
  NodeJS: 2,
  TailwindCSS: 3,
  Elixir: 2,
  PostgreSQL: 2,
  Docker: 2,
  Serverless: 2,
  'AWS Lambda': 2,
  NextJS: 2,
  PostCSS: 1,
  SASS: 2,
  Kong: 2,
}

const generalSkills = [
  'TDD',
  'Kanban',
  'CI',
  'CD',
  'Gitflow',
  'Monorepo Projects',
  'Multirepo Projects',
  'Microservices',
  'SOLID',
]

const SkillWithScore = ({ skill, value }: { skill: string; value: number }) => {
  const values = [...Array(5).keys()]
    .map(key => {
      return key + 1
    })
    .map(key => {
      if (key === value) {
        return (
          <span
            key={`${skill}+${key}`}
            className="pl-1 pr-1 text-support-positive-800"
          >
            {value}
          </span>
        )
      } else {
        return (
          <span
            key={`${skill}+${key}`}
            className="pl-1 pr-1 text-xl text-primary-300"
          >
            {key}
          </span>
        )
      }
    })
  return (
    <li className="pt-1 col-span-2 flex flex-full items-baseline md:flex-none">
      <span className="pr-2 leading-tight text-xl">{skill}:</span>
      {values}
    </li>
  )
}

const SkillWithoutScore = ({ skill }: { skill: string }) => (
  <li className="pt-1 col-span-2 flex flex-full items-baseline md:flex-none">
    <span className="pr-2 leading-tight text-xl">{skill}</span>
  </li>
)

const SkillsContent = () => {
  const TechnicalSkills = Object.entries(skills).map(
    ([skill, value], index) => {
      return <SkillWithScore skill={skill} value={value} key={index} />
    }
  )

  const GeneralSkills = generalSkills.map(skill => {
    return <SkillWithoutScore skill={skill} />
  })

  return (
    <div className="bg-primary-600 flex-full lg:flex-auto text-white flex-wrap pt-10 pl-4 pb-2 text-4xl lg:text-6xl lg:p-6 ">
      <h1 className="text-support-positive-800">Skills</h1>
      <h2 className="text-3xl text-support-success-050">Technical Skills</h2>
      <h3 className="text-base text-primary-400">
        Donde 1 significa usado en proyecto propios y 5 significa dominio alto.
      </h3>
      <ul className="md:grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 lg:text-3xl md:justify-between">
        {TechnicalSkills}
      </ul>
      <br />
      <h2 className="text-3xl text-support-success-050">General Skills</h2>
      <ul className="md:grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 lg:text-3xl md:justify-between">
        {GeneralSkills}
      </ul>
    </div>
  )
}

const Skills = () => (
  <div className="h-screen w-screen overflow-auto flex flex-col lg:flex-row">
    <Header />
    <SkillsContent />
  </div>
)

export default Skills
