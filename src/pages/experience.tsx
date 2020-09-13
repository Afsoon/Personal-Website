import React from 'react'
import Header from '../components/Header'
import LayoutPage from '../components/Layout'

const ExperienceContent = () => (
  <main className="bg-primary-600 flex-full lg:flex-auto text-white flex-wrap pt-10 pl-4 lg:p-6 lg:block lg:items-start lg:justify-between lg:leading-relaxed lg:overflow-auto text-left hyphens-auto">
    <h1 className="text-6xl text-support-positive-800">Experiencia Laboral</h1>
    <ol className="block md:flex pl-4 pr-4 pb-8">
      <li className="pt-4 md:flex-1/2 lg:flex-3/10">
        <h2 className="text-3xl block">Mid-Senior Full Stack Developer - Redradix</h2>
        <span className="text-sm block text-primary-400">
          Febrero 2020 - Actual, Madrid
        </span>
        <ul className="list-inside list-disc pl-2">
          <li className="pt-2">
            Desarrollo del proyecto de <a className="underline text-neutral-500" href="https://conectamosvidas.com/" target="_blank"
              rel="noopener noreferrer">ConectamosVidas</a>. Encargado de la parte validación, envíos de email y despligue en Digital Ocean.
          </li>
          <li className="pt-2">
            Colaboración con Secuoyas en <a className="underline text-neutral-500" href=" https://coronavirus.secuoyas.com/visualizacion/" target="_blank"
              rel="noopener noreferrer">dashboard de datos sobre el Covid</a>. Desarrollo de la gráfica de datos diarios por comunidades.
          </li>
          <li className="pt-2">
            Auditoría de un proyecto de NodeJS que sincronizaba datos de un SQLServer con Salesforce con problemas de rendimiento. Preparación de una propuesta nueva de arquitectura al cliente.
          </li>
          <li className="pt-2">
            Desarrollo de un WebComponent con Preact para una arquitectura de microfrontends.
          </li>
          <li className="pt-2">
            Investigación sobre Next.js junto con Strapi para futuras propuestas de Landing Page.
          </li>
        </ul>
      </li>
      <li className="pt-4 md:flex-1/2 lg:flex-3/10">
        <h2 className="text-3xl block">Software Developer - Ride On</h2>
        <span className="text-sm block text-primary-400">
          Junio 2017 - Mayo 2019, Madrid
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
            donde determinadas queries de inserción y búsqueda pasaron de tardar
            1 - 2 segundos a menos de 1 segundo.
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
            Escribir una guía de cómo desarrollar en local una Lambda con
            Localstack.
          </li>
          <li className="pt-2">
            Desarrollo inicial de un Docker Compose para trabjar en local del
            nuevo dashboard de mantenimiento, el cual requería un PostgreSQL,
            Kong, Konga, Keycloak, Localstack y Redis.
          </li>
          <li className="pt-2">
            Desarrollo de un Back For Frontend en Kotlin con Spring Boot para el
            nuevo dashboard de mantenimiento y la aplicación de Android,
            incluyendo el diseño de la API REST para ambos clientes.
          </li>
          <li className="pt-2">
            Desarrollo de un microservicio en Kotlin con Spring Boot para el
            sistema de gestión de incidencias de mantenimiento.
          </li>
          <li className="pt-2">
            Añadir a la configuración de Docker Compose Elastich Search y Kibana. Ya que es usado para guardar los logs de acceso e incidencias.
          </li>
          <li className="pt-2">
            Integración con Pagerduty del microservicio del sistema de gestión de incidencias, como nuestra fuente de verdad.{' '}
          </li>
          <li className="pt-2">
            Integración con SQS y SNS por los siguientes motivos:
            <ul className="list-inside list-disc pl-4">
              <li>Para no saturar la API Pagerduty.</li>
              <li>Crear un sistemas de reintentos, donde si un mensaje pasa un umbral se considera muerto y require intervención manual.</li>
              <li>Ser capaces de crecer horizontalmente.</li>
              <li>La forma de comunicación entre la plataforma de la aplicación y el sistema de mantenimiento.</li>
            </ul>
          </li>
          <li className="pt-2">
            Desarrollo de un cron job para comprabar que incidencias no va a cumpliar su SLA, con los siguientes caracteristicas:
            <ul className="list-inside list-disc pl-4">
              <li>Lock distribuido con DynamoDB en caso de que queramos escalar horizontalmente.</li>
              <li>Crear nuevas incidencias en PagerDuty con prioridad alta de las incidencias cercanas a acabar su SLA.</li>
              <li>Notificar de las incidencias que no ha cumplido su SLA.</li>
            </ul>
          </li>
          <li className="pt-2">
            Desarrollo de la primera versión del nuevo dashboard de
            mantenimiento en React.
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
          Enero 2016 - Noviembre 2016, Madrid
        </span>
        <p className="pt-4 pl-2 text-primary-300">
          <span className="font-bold text-white">
            Colaboración en el desarrollo de una ​aplicación web de sanidad para
            ayudar a los codificadores
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
          En los últimos seis meses estuve en un proyecto que consistía en la
          <span className="font-bold text-white">
            modernización del sistema de facturación
          </span>{' '}
          de una empresa energética​. Desarrollado con
          <span className="font-bold text-white"> Java 8</span>,
          <span className="font-bold text-white"> Javascript</span>,
          <span className="font-bold text-white"> OracleDB</span>,
          <span className="font-bold text-white"> WebLogic</span>,
          <span className="font-bold text-white"> Toplink</span>,
          <span className="font-bold text-white"> Thymleaf</span>.
        </p>
      </li>
    </ol>
  </main>
)

const Experience = () => (
  <LayoutPage>
    <Header />
    <ExperienceContent />
  </LayoutPage>
)

export default Experience
