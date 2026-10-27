import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Child from './Child';
import DiffDataTypes from './DiffDataTypesProps'

function App() {
  function handleClick() {
    alert("Button clicked!");
  }
 

  return (
    <>
      <h2>Parent Component </h2>

    <Child name="shriya" age={24} />
    <Child name = "abc" age ={22} />

      {/*Ex-2: different data types   */}
       <DiffDataTypes
        name="Shriya"
        age={23}
        isStudent={true}
        skills={["Java", "React", "SQL"]}
        user={{ name: "Hyderabad" }}
        onClick={handleClick}
        icon={<span>⭐</span>}
      />
    </>
  )
}

export default App
