import React, { useState } from 'react'
import {
  IconUser,
  IconBriefcase,
  IconBuilding,
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
    <header className="bg-primary-700 text-white flex flex-wrap md:flex-no-wrap md:items-center lg:flex-col lg:w-24 lg:flex-auto lg:flex-grow-0 lg:flex-shrink-0 lg:items-stretch">
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
          className="group text-support-positive-800 self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4"
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
          className="group self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4"
        >
          <IconGraphBar />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Skills
          </span>
        </a>
        <a
          href="/experience"
          className="group self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4"
        >
          <IconBuilding />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Experience
          </span>
        </a>
        <a
          href="/projects"
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

const introductionText = 'Hola, Soy Said, Software Developer.'

const eachCharacterAsSpan = (character: string, index: number) => {
  return (
    <span
      className="hover:text-support-positive-800 cursor-default"
      key={`${character}-${index}`}
    >
      {character}
    </span>
  )
}

const eachPhraseInsideOfADiv = (
  characters: JSX.Element[],
  index: number,
  array: JSX.Element[][]
) => {
  return (
    <div key={index}>
      {characters}
      {index < array.length - 1 && (
        <span className="hover:text-support-positive-800 cursor-default">
          ,
        </span>
      )}
    </div>
  )
}

const HomeContent = () => {
  const introductionTextAsHTML = introductionText
    .split(',')
    .map(value => {
      return value.split('').map(eachCharacterAsSpan)
    })
    .map(eachPhraseInsideOfADiv)
  return (
    <div className="bg-primary-600 flex-full lg:flex-auto text-white flex-wrap pt-10 pl-4 text-4xl lg:text-6xl lg:p-6 lg:flex lg:items-center">
      <div className="flex flex-col">
        {introductionTextAsHTML}
        <span className="text-lg text-primary-400">
          Front End Developer / Back End Developer
        </span>
      </div>
    </div>
  )
}

const Home = () => (
  <div className="h-screen w-screen overflow-hidden flex flex-col lg:flex-row">
    <Header />
    <HomeContent />
  </div>
)

export default Home
