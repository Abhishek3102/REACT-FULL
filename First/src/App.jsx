import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"
import Button from "./Button"
import Students from "./Students"
import UserGreetings from "./UserGreetings.jsx"
import List from "./List.jsx"
import {people, students} from "./constants.js";
import { useState } from "react";

function App() {

  const [isClicked, setClicked] = useState(false);

function changeClick(){
  setClicked(prev=>(
    !prev
  ))
  // console.log(isClicked);
  
}


  return (
    <>
    <Header/>
    <div className="cards">
    {
      people.map(item=>(
        <Card name={item.name} info={item.info} img={item.img}/>
      ))
    }
    </div>
    <br></br>
    {/* <Button/>
    <br></br>
    <Button1/> */}
    <div className="students">
      {students.map(student=>(
          <Students name={student.name} age={student.age} position={student.position} isBestYoungPlayer={student.isBestYoungPlayer}/>
      ))}
    </div>
    <div className="calorieList">
    <Button handleClick={changeClick}/>
    {/* <UserGreetings isLoggedIn={true} username="Rashy"/> */}
     {isClicked && 
      <List/>
     }  
    </div>
    <Footer/>

    </>
  );
}

  
export default App
