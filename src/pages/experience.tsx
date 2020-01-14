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
        <p className="pt-4 pl-2 text-primary-300">
          El primer mes empece con la{' '}
          <span className="font-bold text-white">
            primera versión para el sistema de reporte de incidencias
          </span>{' '}
          de la plataforma. Desarrollado con
          <span className="font-bold text-white"> Clojure</span>,
          <span className="font-bold text-white"> ClojureScript</span>,
          <span className="font-bold text-white"> PostgreSQL</span>.
        </p>
        <p className="pt-4 pl-2 text-primary-300">
          A continuación empece con{' '}
          <span className="font-bold text-white">
            el sistema de notificaciones
          </span>{' '}
          de la plataforma que requería una{' '}
          <span className="font-bold text-white">integración con Firebase</span>
          . Desarrollado con{' '}
          <span className="font-bold text-white"> Clojure</span>,
          <span className="font-bold text-white"> Firebase</span>,
          <span className="font-bold text-white"> PostgreSQL</span>.
        </p>
        <p className="pt-4 pl-2 text-primary-300">
          <span className="font-bold text-white">
            Mejora del rendimiento de la plataforma​
          </span>{' '}
          dado que había problemas para guardar el estado de las estaciones. El{' '}
          <span className="font-bold text-white">problema​</span> se encontraba
          en que ​
          <span className="font-bold text-white">
            se guardaba el histórico de estados
          </span>{' '}
          de una base​. La{' '}
          <span className="font-bold text-white">solución</span> a la​ que se
          llegó fue usar
          <span className="font-bold text-white"> Kinesis</span>,
          <span className="font-bold text-white"> AWS Lambda</span>,
          <span className="font-bold text-white"> Redis</span>.
        </p>
        <p className="pt-4 pl-2 text-primary-300">
          <span className="font-bold text-white">
            Desarrollo​ de una aplicación web​
          </span>{' '}
          ​y​ de un{' '}
          <span className="font-bold text-white">
            ​sistema de gestión de incidencias​
          </span>{' '}
          para los trabajadores de mantenimiento del producto. El{' '}
          <span className="font-bold text-white">sistema de incidencias</span>{' '}
          se diseño teniendo en mente{' '}
          <span className="font-bold text-white">integrarse con Pagerduty</span>
          . Desarrollado con
          <span className="font-bold text-white"> Kotlin</span>,
          <span className="font-bold text-white"> Arrow</span>,
          <span className="font-bold text-white"> Spring Boot</span>,
          <span className="font-bold text-white"> Javascript</span>,
          <span className="font-bold text-white"> React</span>,
          <span className="font-bold text-white"> Clojure</span>,
          <span className="font-bold text-white"> ​Elasticsearch​</span>,
          <span className="font-bold text-white"> SNS</span>,
          <span className="font-bold text-white"> SQS</span>,
          <span className="font-bold text-white"> Keycloak</span>,
          <span className="font-bold text-white"> PagerDuty</span>,
          <span className="font-bold text-white"> PostgreSQL</span>.
        </p>
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
            Ayudar en el desarrollo de una ​aplicación web de sanidad para
            ayudar a los codificadores​
          </span>{' '}
          a detectar el diagnóstico, actual y previos de un informe médico y
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
