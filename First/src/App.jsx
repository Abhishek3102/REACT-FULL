// import React from "react";
// import Header from "./Header"
// import Footer from "./Footer"
// import Card from "./Card"
// import Button from "./Button"
// import Students from "./Students"
// import UserGreetings from "./UserGreetings.jsx"
// import List from "./List.jsx"
// import {people, students} from "./constants.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import "../src/index.css";
// // import ColorPicker from "./colorPicker.jsx";

// function App() {

//   const [isClicked, setClicked] = useState(false);

// function changeClick(){
//   setClicked(prev=>(
//     !prev
//   ))
//   // console.log(isClicked);
  
// }


//   return (
//     <>
//     <Header>Future of Manchester United </Header>
//     <div className="cards">
//     {
//       people.map(item=>(
//         <Card name={item.name} role={item.role} info={item.info} img={item.img}/>
//       ))
//     }
//     </div>
//     <br></br>
//     {/* <Button/>
//     <br></br>
//     <Button1/> */}
//     <div className="students">
//       {students.map(student=>(
//           <Students name={student.name} age={student.age} position={student.position} isBestYoungPlayer={student.isBestYoungPlayer}/>
//       ))}
//     </div>
//     <div className="playerList">
//     <Button handleClick={changeClick}/>
//     {/* <UserGreetings isLoggedIn={true} username="Rashy"/> */}
//      {isClicked && 
//       <List/>
//      }  
//     </div>
//     {/* <ColorPicker/> */}
//     <Footer/>

//     </>
//   );
// }

  
// export default App


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Button from "./Button";
import Students from "./Students";
import List from "./List.jsx";
import { people, students } from "./constants.jsx";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import "../src/index.css";

function App() {
  const [isClicked, setClicked] = useState(false);

  function changeClick() {
    setClicked((prev) => !prev);
  }

  return (
    <Router>
      <Header>Manchester United</Header>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <div className="cards">
                {people.map((item) => (
                  <Card
                    key={item.name}
                    name={item.name}
                    role={item.role}
                    info={item.info}
                    img={item.img}
                  />
                ))}
              </div>
              <br />
              <div className="students">
                {students.map((student) => (
                  <Students
                    key={student.name}
                    name={student.name}
                    age={student.age}
                    position={student.position}
                    isBestYoungPlayer={student.isBestYoungPlayer}
                  />
                ))}
              </div>
              <div className="playerList">
                <Button handleClick={changeClick} />
                {isClicked && <List />}
              </div>
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
