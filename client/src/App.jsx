import React from 'react'
import Canvas from './canvas'
import Customier from './pages/Customier'
import Home from './pages/Home'
const App = () => {
  return (
    <main className='app transition-all ease-in'>
      <Home/>
      <Canvas/>
      <Customier/>
    </main>
  )
}

export default App