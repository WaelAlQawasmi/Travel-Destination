import { Link, useParams } from 'react-router-dom';
import { useState } from "react";
export default function Tour(prop) {
    let { tour } = useParams(); 

    return (
      
   
        <div class="tours">
         
<h1>ki. {prop.info}</h1>
        </div>
    );
}
