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
          className="group text-support-positive-800 self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4"
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

const AboutContent = () => (
  <div className="bg-primary-600 flex-full lg:flex-auto text-white flex-wrap pt-10 pl-4 lg:p-6 lg:flex lg:items-start lg:justify-between lg:leading-relaxed lg:overflow-auto text-left hyphens-auto">
    <div className="flex-3/10 pb-4">
      <h1 className="text-6xl text-support-positive-800">About Me</h1>
      <p className="pt-4">
        Apasionado por los sistemas distribuidos y por la programación
        funcional.
      </p>
      <p className="pt-4">
        Persona resolutiva, detallista y colaboradora . Interesado por la
        calistenia, el culturismo y otras actividades al aire libre. Apasionado
        por viajar, cocinar y ver series de TV.
      </p>
      <p className="pt-4">
        Actualmente, en busca de nuevas oportunidades laborales. Atraído tanto
        por el desarrollo front como por el back.
      </p>
    </div>
    <div className="flex-3/10 pb-4">
      <h2 className="text-3xl text-support-success-050 pl-2">Education</h2>
      <ul className="pl-4">
        <li className="pt-4">
          <span className="text-2xl block">
            Universidad Rey Juan Carlos/ Grado de Ingeniería Informática
          </span>
          <span className="text-sm block text-primary-400">
            September 2012 - Actual, Mostoles
          </span>
          <p className="pt-4 pl-2 text-primary-200">
            En este momento, me encuentro desarrollando el proyecto de fin de
            grado, que consiste en el desarrollo de dos aplicaciones web para la
            gestión de una peluqueria. Los primeros meses los dediqué a formarme
            con los cursos de FrontendMasters y los dos últimos los estoy
            empleando en el desarrollo.
          </p>
        </li>
        <li className="pt-4">
          <span className="text-2xl block">H4ckademy</span>
          <span className="text-sm block text-primary-400">
            October 2015 - December 2015, Madrid
          </span>
          <p className="pt-4 pl-2 text-primary-200">
            Code retreat para mejorar mis habilidad de programación y soft
            skills realizando un proyecto open source. Durante estos 9 meses se
            desarrolló el juego <a href="/">Game Voting</a>.
          </p>
        </li>
      </ul>
    </div>
    <div className="flex-3/10 pb-4">
      <h2 className="text-2xl text-support-success-050 pl-2 pt-4">Languages</h2>
      <ul className="pl-4">
        <li className="pt-4">
          <span className="text-2xl">Spanish -</span>
          <span className="pl-2">Native</span>
        </li>
        <li className="pt-4">
          <span className="text-2xl">English -</span>
          <span className="pl-2">B1</span>
        </li>
      </ul>
      <h3 className="text-2xl text-support-success-050 pl-2 pt-4">
        Self Study
      </h3>
      <ul className="pl-4">
        <li className="pt-4 text-2xl">
          <a href="/">Frontend Masters</a>
        </li>
      </ul>
    </div>
  </div>
)

const About = () => (
  <div className="h-screen w-screen overflow-auto lg:overflow-hidden flex flex-col lg:flex-row">
    <Header />
    <AboutContent />
  </div>
)

export default About
