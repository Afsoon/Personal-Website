import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  IconUser,
  IconBriefcase,
  IconBuilding,
  IconGraphBar,
  IconHome,
  Github,
  Linkedin,
} from '../../icons'

const isActualPathname = (value: string, pathname: string) => {
  return value === pathname
}

/**https://github.com/philipwalton/flexbugs/issues/271 flex-shrink-0 why I have to do that */
const Header = () => {
  const [showOptions, setShowOptions] = useState(false)
  const router = useRouter()
  const display = showOptions ? 'flex' : 'hidden'
  return (
    <header className="flex-shrink-0 bg-primary-700 text-white flex flex-wrap md:flex-no-wrap md:items-center lg:flex-col lg:w-24 lg:flex-auto lg:flex-grow-0 lg:flex-shrink-0 lg:items-stretch">
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
          className={`${isActualPathname('/', router.pathname) &&
            'text-support-positive-800'} group self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4`}
        >
          <IconHome />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Inicio
          </span>
        </a>
        <a
          href="/about"
          className={`${isActualPathname('/about', router.pathname) &&
            'text-support-positive-800'} group self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4`}
        >
          <IconUser />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            About
          </span>
        </a>
        <a
          href="/skills"
          className={`${isActualPathname('/skills', router.pathname) &&
            'text-support-positive-800'} group self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4`}
        >
          <IconGraphBar />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Habilidades
          </span>
        </a>
        <a
          href="/experience"
          className={`${isActualPathname('/experience', router.pathname) &&
            'text-support-positive-800'} group self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4`}
        >
          <IconBuilding />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Experiencia
          </span>
        </a>
        <a
          href="/projects"
          className={`${isActualPathname('/projects', router.pathname) &&
            'text-support-positive-800'} group self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4`}
        >
          <IconBriefcase />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Proyectos
          </span>
        </a>
      </nav>
      <nav className="hidden lg:flex lg:flex-col lg:flex-1/10 lg:p-1 lg:justify-around">
        <a
          href="https://github.com/Afsoon"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:self-center lg:h-12"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/said-atrahouch/"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:self-center lg:h-12"
        >
          <Linkedin />
        </a>
      </nav>
    </header>
  )
}

export default Header
