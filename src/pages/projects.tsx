import React from 'react'
import Header from '../components/Header'
import LayoutPage from '../components/Layout'

const BenaventePeluquerosProject = () => (
  <li className="md:inline-block pt-4 md:pt-0 col-span-3 shadow-2xl">
    <a
      href="https://benaventepeluqueros.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <figure>
        <picture>
          <img
            className="w-full object-contain"
            src="/benaventepeluqueros.jpg"
            alt="An screenshot from the project"
          />
        </picture>
        <figcaption className="bg-primary-900 pl-1 pr-1 pt-1">
          <h2 className="text-2xl group-hover:text-support-positive-800">
            Benavente Peluqueros
          </h2>
        </figcaption>
      </figure>
    </a>
  </li>
)

const SOSCortarmeElPeloProject = () => (
  <li className="md:inline-block pt-4 md:pt-0 col-span-3 shadow-2xl">
    <a
      href="https://soscortarmeelpelo.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <figure>
        <picture>
          <img
            className="w-full object-contain"
            src="/soscortarmeelpelo.png"
            alt="An screenshot from the project"
          />
        </picture>
        <figcaption className="bg-primary-900 pl-1 pr-1 pt-1">
          <h2 className="text-2xl group-hover:text-support-positive-800">
            SOS Cortarme El Pelo
          </h2>
        </figcaption>
      </figure>
    </a>
  </li>
)

const ProjectsContent = () => (
  <main className="bg-primary-600 flex-full lg:flex-auto text-white flex-wrap pt-10 pl-4 pr-4 lg:p-6 lg:overflow-auto">
    <h1 className="text-4xl lg:text-6xl text-support-positive-800">
      Proyectos
    </h1>
    <ul className="block md:grid md:gap-4 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 xl:pt-4">
      <BenaventePeluquerosProject />
      <SOSCortarmeElPeloProject />
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
