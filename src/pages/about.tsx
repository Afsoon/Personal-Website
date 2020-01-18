import React from 'react'
import Header from '../components/Header'
import LayoutPage from '../components/Layout'

const AboutContent = () => (
  <main className="bg-primary-600 flex-full lg:flex-auto text-white flex-wrap pr-4 pt-10 pl-4 lg:p-6 lg:flex lg:items-start lg:justify-between lg:leading-relaxed lg:overflow-auto text-left hyphens-auto">
    <div className="flex-3/10 pb-4">
      <h1 className="text-6xl text-support-positive-800">Sobre mí</h1>
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
      <h2 className="text-3xl text-support-success-050 pl-2">Estudios</h2>
      <ul className="pl-4">
        <li className="pt-4">
          <span className="text-2xl block">
            Universidad Rey Juan Carlos/ Grado de Ingeniería Informática
          </span>
          <span className="text-sm block text-primary-400">
            Septiembre 2012 - Actual, Móstoles
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
            Octubre 2015 - Diciembre 2015, Madrid
          </span>
          <p className="pt-4 pl-2 text-primary-200">
            Code retreat para mejorar mis habilidad de programación y soft
            skills realizando un proyecto open source. Durante estos 9 meses se
            desarrolló el juego{' '}
            <a
              href="https://github.com/Afsoon/GameVoting"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Game Voting
            </a>
            .
          </p>
        </li>
      </ul>
    </div>
    <div className="flex-3/10 pb-4">
      <h2 className="text-2xl text-support-success-050 pl-2 pt-4">Idiomas</h2>
      <ul className="pl-4">
        <li className="pt-4">
          <span className="text-2xl">Español -</span>
          <span className="pl-2">Nativo</span>
        </li>
        <li className="pt-4">
          <span className="text-2xl">Inglés -</span>
          <span className="pl-2">B1</span>
        </li>
      </ul>
      <h3 className="text-2xl text-support-success-050 pl-2 pt-4">
        Autoaprendizaje
      </h3>
      <ul className="pl-4">
        <li className="pt-4 text-2xl">
          <a
            href="https://frontendmasters.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Masters
          </a>
        </li>
      </ul>
    </div>
  </main>
)

const About = () => (
  <LayoutPage>
    <Header />
    <AboutContent />
  </LayoutPage>
)

export default About
