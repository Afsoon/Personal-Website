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
    <header className="bg-primary-700 text-white flex flex-wrap md:flex-no-wrap md:items-center lg:flex-col lg:w-24 lg:flex-auto lg:items-stretch">
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
        className={`h-12 justify-between p-1 flex-full ${display} md:flex md:justify-around  md:flex-1 lg:flex lg:flex-col lg:justify-center`}
      >
        <a
          href="/"
          className="group self-center flex items-center lg:flex-col lg:p-4"
        >
          <IconHome />
          <span className="pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Home
          </span>
        </a>
        <a
          href="/"
          className="group self-center flex items-center lg:flex-col lg:p-4"
        >
          <IconUser />
          <span className="pl-3 lg:pl-0 group-hover:text-support-positive-800">
            About
          </span>
        </a>
        <a
          href="/"
          className="group self-center flex items-center lg:flex-col lg:p-4"
        >
          <IconGraphBar />
          <span className="pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Skills
          </span>
        </a>
        <a
          href="/"
          className="group self-center flex items-center lg:flex-col lg:p-4"
        >
          <IconBuilding />
          <span className="pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Experience
          </span>
        </a>
        <a
          href="/"
          className="group self-center flex items-center lg:flex-col lg:p-4"
        >
          <IconBriefcase />
          <span className="pl-3 lg:pl-0 group-hover:text-support-positive-800">
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

const Home = () => (
  <div className="h-screen w-screen flex flex-col lg:flex-row">
    <Header />
    <div className="bg-primary-500 flex-full">CONTENT</div>
  </div>
)

export default Home
