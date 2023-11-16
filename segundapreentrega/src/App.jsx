import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { Home } from './componentes/Home/Home'
import { Navbar } from './componentes/navbar/Navbar'
import { IteamListCointainer } from './componentes/IteamListContainer/IteamListCointainer'
import 'bootstrap/dist/css/bootstrap.min.css';







  
function App() {
  const contenidoDeTitulo = "Se vine"
  return (
    <div className='container'>
      <Navbar/>
      <IteamListCointainer greeting = 'Saludo app'/>

    </div>
  )
}

export default App