import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Nav from './Components/Nav'
import Technologies from './Components/technologies/Technologies'
import type { ITechnology } from './types/technologyType'

function App() {
  const technologiesFetch = async():Promise<ITechnology[]> => {
    const res = fetch("../public/technologies.json")
    const data = (await res).json();
    return data;
  }
  const [technologiesPromise] = useState(technologiesFetch())
  return (
    <>
        <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={"Loading Data..."}>
        <Technologies technologiesPromise = {technologiesPromise}></Technologies>
      </Suspense>
    </>
  )
}

export default App
