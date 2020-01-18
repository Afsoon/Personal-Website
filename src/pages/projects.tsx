import React from 'react'
import Header from '../components/Header'
import LayoutPage from '../components/Layout'

const PersonalWebsiteProject = () => (
  <li className="md:inline-block pt-4 md:pt-0 col-span-3 shadow-2xl">
    <a href="/" className="group">
      <figure>
        <picture>
          <img
            className="h-64 w-full object-center md:object-fill"
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
      <span className="text-primary-400">Tecnologías:</span>{' '}
      <span className="bg-primary-600 p-1 rounded-lg hover:text-support-positive-800">
        TailwindCSS
      </span>{' '}
      <span className="bg-primary-600 p-1 rounded-lg hover:text-support-positive-800">
        NextJS
      </span>
    </p>
  </li>
)

const ProjectsContent = () => (
  <main className="bg-primary-600 flex-full lg:flex-auto text-white flex-wrap pt-10 pl-4 pr-4 lg:p-6 lg:overflow-auto">
    <h1 className="text-4xl lg:text-6xl text-support-positive-800">
      Proyectos
    </h1>
    <ul className="block md:grid md:gap-4 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 xl:pt-4">
      <PersonalWebsiteProject />
    </ul>
  </main>
)

const Projects = () => (
  <LayoutPage>
    <Header />
    <ProjectsContent />
  </LayoutPage>
)

export default Projects
