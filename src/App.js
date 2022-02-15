import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home";
import Tour from "./components/tours/tour/Tour"
import { Routes, Route } from "react-router-dom";
import data from "./data/db.json"
import TourDetails from './components/TourDetails/TourDetails';
import React, { useState } from 'react';



function App() {

  

  return (
    <>

      <Routes>
      <Route path='/TourDetails/:tour' element={<TourDetails deta={data}  />}/>
<Route path='/Tour/:tour' element={<Tour deta={data}  />}/>
        <Route path='/' element={<Home deta={data} />} />
      </Routes>

   
    </>

  );
}

export default App;
