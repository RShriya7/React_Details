import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Child from './Child';

function App() {
 

  return (
    <>
      <h2>Parent Component </h2>

    <Child name="shriya" age={24} />
    <Child name = "abc" age ={22} />

    </>
  )
}

export default App
