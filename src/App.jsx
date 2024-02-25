import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <div className="container-flex">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <Home/>
        </div>
        <div className="row">
          <Footer/>
        </div>

      </div>
     
    </>
  )
}

export default App
