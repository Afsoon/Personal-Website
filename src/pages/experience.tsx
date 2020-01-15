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
          className="group text-support-positive-800 self-center flex items-center flex-col sm:flex-row lg:flex-col pt-2 lg:p-4"
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

const ExperienceContent = () => (
  <div className="bg-primary-600 flex-full lg:flex-auto text-white flex-wrap pt-10 pl-4 lg:p-6 lg:block lg:items-start lg:justify-between lg:leading-relaxed lg:overflow-auto text-left hyphens-auto">
    <h1 className="text-6xl text-support-positive-800">Experience</h1>
    <ol className="block md:flex pl-4 pr-4 pb-4">
      <li className="pt-4 md:flex-1/2 lg:flex-3/10">
        <h2 className="text-3xl block">Software Developer - Ride On</h2>
        <span className="text-sm block text-primary-400">
          June 2017 - May 2019, Madrid
        </span>
        <ul className="list-inside list-disc pl-2">
          <li className="pt-2">
            Implementación de la primera versión del sistema de incidencias de
            la plataforma.
          </li>
          <li className="pt-2">
            Integración con Firebase para el envío de notificaciones.
          </li>
          <li className="pt-2">
            Integración con Traccar para el sistema de GPS de las bicicletas de
            la plataforma.
          </li>
          <li className="pt-2">
            Mejora del rendimiento del dashboard de mantenimiento, pasando de
            una media de 3 segundos por petición a menos de 1 segundo por
            petición.
          </li>
          <li className="pt-2">
            Mejora del rendimiento de la plataforma a nivel de base de datos,
            donde determinadas queries de inserción y búsqueda tardaban varios
            segundos en ejecutarse.
          </li>
          <li className="pt-2">
            Mejora del tiempo de comprobación de si un anclaje estaba libre de 2
            segundos a 100 milisegundos.
          </li>
          <li className="pt-2">
            Creación de una lambda, en AWS Lambda, para guardar el estado de
            todos los anclajes y estaciones en Redis.
          </li>
          <li className="pt-2">
            Escribir una guía de cómo desarrollar en local un Lambda con
            Localstack.
          </li>
          <li className="pt-2">
            Desarrollo inicial de un Docker Compose para trabjar en local del
            nuevo dashboard de mantenimiento, el cual requería un PostgreSQL,
            Kong, Konga, Keycloak, Localstack y Redis.
          </li>
          <li className="pt-2">
            Implementación de un Back For Frontend en Kotlin con Spring Boot
            para el nuevo dashboard de mantenimiento y la aplicación de Android,
            incluyendo el diseño de la API REST para ambos clientes.
          </li>
          <li className="pt-2">
            Implementación de un microservicio en Kotlin con Spring Boot para el
            sistema de gestión de incidencias de mantenimiento.
          </li>
          <li className="pt-2">
            Desarrollo de la primera versión del nuevo dashboard de
            mantenimiento en React.
          </li>
          <li className="pt-2">
            Integración con Pagerduty del microservicio del sistema de gestión
            de incidencias.{' '}
          </li>
          <li className="pt-2">
            Integración con SQS y SNS del microservicio de gestión de
            incidencias con el objetivo de evitar saturar la API de Pagerduty,
            así como la adición de un sistema de reintento, la posibilidad de
            escalar horizontalmente y una forma de comunicación entre la
            plataforma y el sistema de gestión de incidencias.
          </li>
          <li className="pt-2">
            Actualización del nuevo dashboard de mantenimiento a React 16.
          </li>
          <li className="pt-2">
            Reducción a la mitad los tiempo de build de la plataforma tras el
            borrado del código relacionado con el dashboard antiguo.
          </li>
        </ul>
      </li>
      <li className="pt-4 md:flex-1/2 lg:flex-3/10">
        <h2 className="text-3xl block">
          Programador Junior- Indizen Technology & Business Confluence
        </h2>
        <span className="text-sm block text-primary-400">
          January 2016 - November 2016, Madrid
        </span>
        <p className="pt-4 pl-2 text-primary-300">
          <span className="font-bold text-white">
            Colaboración en el desarrollo de una ​aplicación web de sanidad para
            ayudar a los codificadores​
          </span>{' '}
          a detectar los diagnósticos, actual y previos de un informe médico y
          todos los procedimientos que se han realizado. Desarrollado con
          <span className="font-bold text-white"> Java 7</span>,
          <span className="font-bold text-white"> MongoDB</span>,
          <span className="font-bold text-white"> Spring</span>,
          <span className="font-bold text-white"> Tomcat</span>,
          <span className="font-bold text-white"> Javascript</span>,
          <span className="font-bold text-white"> jQuery</span>.
        </p>
        <p className="pt-4 pl-2 text-primary-300">
          En los últimos seis meses estuve en un proyecto que consistía en la ​
          <span className="font-bold text-white">
            modernización del sistema de facturación
          </span>{' '}
          de una empresa energética​. Desarrollado con
          <span className="font-bold text-white"> Java 5</span>,
          <span className="font-bold text-white"> Javascript</span>,
          <span className="font-bold text-white"> OracleDB</span>,
          <span className="font-bold text-white"> WebLogic</span>,
          <span className="font-bold text-white"> Toplink</span>,
          <span className="font-bold text-white"> Thymleaf</span>.
        </p>
      </li>
    </ol>
  </div>
)

const Experience = () => (
  <div className="h-screen w-screen overflow-auto lg:overflow-hidden flex flex-col lg:flex-row">
    <Header />
    <ExperienceContent />
  </div>
)

export default Experience
