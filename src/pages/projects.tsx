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
          className="group text-support-positive-800 self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4"
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

const CardProject = () => (
  <div className="inline-block pt-4 md:pt-0 col-span-3 shadow-2xl bg-primary-800">
    <a href="/" className="group">
      <figure>
        <picture>
          <img
            src="/personal-website.png"
            alt="An screenshot from the project"
          />
        </picture>
        <figcaption className="bg-primary-900 pl-1 pr-1 pt-1">
          <h2 className="text-3xl group-hover:text-support-positive-800">
            Personal Website
          </h2>
        </figcaption>
      </figure>
    </a>
    <p className="bg-primary-900 pt-3 pl-1 pr-1 pb-2 cursor-default">
      <span className="text-primary-400">Technologies:</span>{' '}
      <span className="bg-primary-600 p-1 rounded-lg hover:text-support-positive-800">
        TailwindCSS
      </span>{' '}
      <span className="bg-primary-600 p-1 rounded-lg hover:text-support-positive-800">
        NextJS
      </span>
    </p>
  </div>
)

const ProjectsContent = () => (
  <div className="bg-primary-600 flex-full lg:flex-auto text-white flex-wrap pt-10 pl-4 pr-4 lg:p-6 lg:overflow-auto">
    <h1 className="text-4xl lg:text-6xl text-support-positive-800">Projects</h1>
    <span className="text-primary-400">Un listado de proyectos personales</span>
    <div className="md:grid md:gap-4 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 xl:pt-4">
      <CardProject />
    </div>
  </div>
)

const Projects = () => (
  <div className="h-screen w-screen overflow-auto lg:overflow-hidden flex flex-col lg:flex-row">
    <Header />
    <ProjectsContent />
  </div>
)

export default Projects
