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
import Children from './Children'
import Children2 from './Children2'

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

    const user1={
      name:"abc",
      age:23
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

      {/*Passing Children to component */}
      <Children>
        <h2>React Props</h2>
        <p>Props help us reuse components.</p>
        <button>Learn More</button>
      </Children>  

      <div>
        <Children>
          <h2>React Props</h2>
          <p>Props help us reuse components.</p>
          <button>Learn More</button>
        </Children> 

        <Children>
          <h2>Java</h2>
          <p>Java is used for backend development.</p>
        </Children> 
      </div>  

      {/*Passing Children & Props to component */}  
      <div>
        <Children2 title="My Skills" emp={user1}>
           <p>Java</p>
          <p>React</p>
          <p>SQL</p>
        </Children2>

         <Children2 title="My Goal">
        <p>Get a ₹12 LPA job!</p>
        <button>View Plan</button>
      </Children2>
      </div>
    </>

    
  );
}

export default App
