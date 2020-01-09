import React, { useState } from 'react'
import '../style.css'

//`flex-full h-12 flex justify-between p-1 `

const Header = () => {
  const [showOptions, setShowOptions] = useState(false)
  const display = showOptions ? 'flex' : 'hidden'
  return (
    <header className="bg-primary-800 text-white flex flex-wrap md:flex-no-wrap lg:flex-col lg:w-24 lg:flex-full">
      <div className="flex flex-full md:flex-none md:flex-col">
        <img
          src="/logo.png"
          alt="Logo of the web is a s"
          className="bg-primary-900 p-1"
        />
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
        <a href="/" className="self-center lg:h-12">
          Home
        </a>
        <a href="/" className="self-center lg:h-12">
          About
        </a>
        <a href="/" className="self-center lg:h-12">
          Skills
        </a>
        <a href="/" className="self-center lg:h-12">
          Experience
        </a>
        <a href="/" className="self-center lg:h-12">
          Projects
        </a>
      </nav>
      <nav className="bg-support-success-900 hidden lg:flex lg:flex-col lg:flex-1/10 lg:p-1 lg:justify-around">
        <a href="/" className="md:self-center md:h-12">
          Linkedin
        </a>
        <a href="/" className="md:self-center md:h-12">
          Github
        </a>
      </nav>
    </header>
  )
}

const Home = () => (
  <div className="h-screen w-screen lg:flex lg:flex-col lg:flex-wrap">
    <Header />
    <div>CONTENT</div>
  </div>
)

export default Home
