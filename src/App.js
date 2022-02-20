import React, { useEffect } from 'react'
import './App.css'
import { Cards, Charts, CountrySelector } from './Components'
import { fetchData } from './api/index'

function App() {

  useEffect(() => { 
    const data = fetchData()
    console.log(data)
  }, [])

  return (
    <div className='App'>
      <Cards />
      <Charts />
      <CountrySelector />
    </div>
  )
}

export default App
