import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero title="Welcome to Convertaphile!" subtitle="A land of conversion"></Hero>
    <div>App</div>
    </>
  )
}

export default App