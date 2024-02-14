import React  from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import Signin from "./components/Signin";
import Councellor from "./components/Councellor";
import Appointment from "./components/Appointment";
import Signup from "./components/Signup";
import Visitor from "./components/Visitor";
function App() {
  return <React.Fragment>
    <Header>
  <Header/>    
    </Header>
    <main>
      <Routes>
        <Route path="/" element={<Home/ >} exact />
        <Route path="/signin" element={<Signin/ >} exact />
        <Route path="/signup" element={<Signup/ >} exact />
        <Route path="/AddCouncellor" element={<Councellor/ >} exact />
        <Route path="/Appointment" element={<Appointment/ >} exact />
        <Route path="/AddVisitor" element={<Visitor/>} exact />
      </Routes>
    </main>
  </React.Fragment>
}

export default App;


