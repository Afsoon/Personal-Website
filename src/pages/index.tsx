import React from 'react'
import Header from '../components/Header'
import LayoutPage from '../components/Layout'

const introductionText = 'Hola 👋, Soy Said, Software Developer.'

const eachCharacterAsSpan = (character: string, index: number) => {
  return (
    <span
      className="hover:text-support-positive-800 cursor-default"
      key={`${character}-${index}`}
    >
      {character}
    </span>
  )
}

const eachPhraseInsideOfADiv = (
  characters: JSX.Element[],
  index: number,
  array: JSX.Element[][]
) => {
  return (
    <div key={index}>
      {characters}
      {index < array.length - 1 && (
        <span className="hover:text-support-positive-800 cursor-default">
          ,
        </span>
      )}
    </div>
  )
}

const HomeContent = () => {
  const introductionTextAsHTML = introductionText
    .split(',')
    .map(value => {
      return value.split('').map(eachCharacterAsSpan)
    })
    .map(eachPhraseInsideOfADiv)
  return (
    <div className="bg-primary-600 flex-full lg:flex-auto text-white flex-wrap pt-10 pl-4 text-4xl lg:text-6xl lg:p-6 lg:flex lg:items-center">
      <div className="flex flex-col">
        {introductionTextAsHTML}
        <span className="text-lg text-primary-400">
          Front End Developer / Back End Developer
        </span>
      </div>
    </div>
  )
}

const Home = () => (
  <LayoutPage>
    <Header />
    <HomeContent />
  </LayoutPage>
)

export default Home
