import { useParams } from 'react-router-dom';
import './Tour.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import TourDetails from '../../TourDetails/TourDetails';

import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import Home from '../../home/Home';
export default function Tour(props) {

    const [overflowStates, soverflowHandler]= useState("hidden");

// when the user click on the buuton I want to change the state from false to true 
const handleFlow = () =>{
    overflowStates==="hidden"?soverflowHandler("none"):soverflowHandler("hidden")
    
  console.log(overflowStates);
 
}
    let { tour } = useParams(); 
const info= props.deta.filter((value)=> value.id==tour)
console.log(info)
let url= "/TourDetails/"+tour;
    return (
      <>
       <Header />
    
   
        <div class="tour">
         
                            
         <img src={info[0].image}/>
      
         
<h1> {info[0].name}</h1>
<TourDetails  overflowStates={overflowStates} infor={info[0].info} handleFlow={handleFlow}/>
        </div>
        <Footer />
        </>
    );
}
