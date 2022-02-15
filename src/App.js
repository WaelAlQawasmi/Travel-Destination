import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home";
import Tour from "./components/tours/tour/Tour"
import { Routes, Route } from "react-router-dom";
import data from "./data/db.json"
import React, { useState } from 'react';



function App() {

  
  const [info, setInfo]= useState("");

  // when the user click on the buuton I want to change the state from false to true 
  const tourHandel = (infor) =>{

   setInfo(infor) // inside the pracketes I will add the new state value 
   
}
  return (
    <>

      <Routes>
<Route path='/Tour/:tour' element={<Tour info={info} setInfo={setInfo} />}/>
        <Route path='/' element={<Home deta={data}  setInfo={setInfo}/>} />
      </Routes>

   
    </>

  );
}

export default App;
