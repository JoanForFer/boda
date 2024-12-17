import './App.css'
import React, {useState, useEffect} from 'react'

import Portada from '../src/seccions/portada/Portada'
import Data from '../src/seccions/data/Data'
import Ubicacio from '../src/seccions/ubicacio/Ubicacio'
import Dress from '../src/seccions/dress/Dress'
import Diners from '../src/seccions/diners/Diners'
import Musica from '../src/seccions/musica/Musica'
import Fotos from '../src/seccions/fotos/Fotos'
import Asistencia from '../src/seccions/asistencia/Asistencia'
import Footer from '../src/seccions/footer/Footer'

import img from '../src/assets/noMobil.png'

function App() {
  const [esMobil, setEsMobil] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setEsMobil(window.innerWidth <= 768 && window.innerHeight > window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return() => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    esMobil ?
      <div>
        <Portada/>
        <Data/>
        <Ubicacio/>
        <Dress/>
        <Diners/>
        <Musica/>
        <Fotos/>
        <Asistencia/>
      </div>
      :
      <img src={img} style={{width:'100%'}}/>
  )
}

export default App
