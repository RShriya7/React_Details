import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Child from './Child';
import DiffDataTypes from './DiffDataTypesProps'
import DefaultProps from './DefaultProps'
import RenamingPropsDestructuring from './RenamingPropsDestructuring'
import NestedObjectsAsProps from './NestedObjects_Props'
import PassingFun_Props from './PassingFunctionsAsProps'

function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  const user={
        name:undefined,
        age:23,
        address :{
          city :undefined
        },
        country:"india"
      };

  {/* Passing function as prop */}
  function handleGreet()
  {
    alert("Hello from the parent!");
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

      {/* Ex-3: default props*/}
      <DefaultProps name="abc"/>
      <DefaultProps name="123" age={undefined}/>
      <DefaultProps name="123" age={0}/>
      <DefaultProps name="123" age={null}/>
      <DefaultProps name="123" age={false}/>
      <DefaultProps name="123" age=""/>


      {/* Ex-4: renaming props while destructuring*/}
      <RenamingPropsDestructuring name="shriya"/>

      {/* Ex-5: using nested objects as props*/}
      
      <NestedObjectsAsProps person={user}/>

      {/* Passing function as prop */}
      <PassingFun_Props onGreet = {handleGreet}/>
    </>

    
  );
}

export default App
