import { useParams } from 'react-router-dom';
import { useState } from "react";
export default function Tour(props) {
    let { tour } = useParams(); 
const info= props.deta.filter((value)=> value.id==tour)
console.log(info)
    return (
      
   
        <div class="tours">
         
<h1>ki. {info[0].info}</h1>
        </div>
    );
}
