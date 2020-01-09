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
          href="/"
          className="group self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4"
        >
          <IconBuilding />
          <span className="sm:pl-3 lg:pl-0 group-hover:text-support-positive-800">
            Experience
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

const HomeContent = () => (
  <div className="bg-primary-600 flex-full text-white flex flex-wrap pt-10 pl-4 text-4xl lg:text-6xl lg:p-16 lg:items-center">
    <div className="flex flex-col">
      <div>
        <span className="hover:text-support-positive-800 cursor-default">
          H
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          i
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          ,
        </span>
      </div>
      <div>
        <span className="hover:text-support-positive-800 cursor-default">
          I
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          '
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          m
        </span>
        &nbsp;
        <span className="hover:text-support-positive-800 cursor-default">
          S
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          a
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          i
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          d
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          ,
        </span>
      </div>
      <div>
        <span className="hover:text-support-positive-800 cursor-default">
          S
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          o
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          f
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          t
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          w
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          a
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          r
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          e
        </span>
        &nbsp;
        <span className="hover:text-support-positive-800 cursor-default">
          D
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          e
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          v
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          e
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          l
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          o
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          p
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          e
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          r
        </span>
        <span className="hover:text-support-positive-800 cursor-default">
          .
        </span>
      </div>
      <span className="text-lg text-primary-400">
        Front End Developer / Back End Developer
      </span>
    </div>
  </div>
)

const Home = () => (
  <div className="h-screen w-screen overflow-hidden flex flex-col lg:flex-row">
    <Header />
    <HomeContent />
  </div>
)

export default Home
