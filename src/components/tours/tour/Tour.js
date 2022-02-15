import { useParams } from 'react-router-dom';
import './Tour.css';
import { useState } from "react";
export default function Tour(props) {
    let { tour } = useParams(); 
const info= props.deta.filter((value)=> value.id==tour)
console.log(info)
    return (
      
   
        <div class="tour">
         
         <img src={info[0].image}/>
<h1>ki. {info[0].name}</h1>
        </div>
    );
}
