import { useParams } from 'react-router-dom';
 import './TourDetails.css';
 import { useState } from "react";
export default function TourDetails(props) {
//     let { tour } = useParams(); 
// const info= props.deta.filter((value)=> value.id==tour)


// const [overflowStates, soverflowHandler]= useState("hidden");

// when the user click on the buuton I want to change the state from false to true 
// const handleFlow = () =>{
//     overflowStates==="hidden"?soverflowHandler("none"):soverflowHandler("hidden")
    
//   console.log(overflowStates);
 
// }


if(props.overflowStates=="hidden"){


    return (
     
   
        // <div className='tour'>
         /* <h1 style={{color:"red"}}>{info[0].name}</h1> */
        //  <img src={info[0].image}/>
/* <h1 className='parag' style={{overflow:"hodden"}}> {info[0].info} */
// 
<>

<h1 className='p' style={{overflow: "hidden"}}>{props.infor}</h1>
<button onClick={props.handleFlow}>see more</button>
</>
            );}
            else{
            return (
      
   
                <>

                <h1 className='p' style={{height:"auto"}}>{props.infor}</h1>
                <button onClick={props.handleFlow} >see less</button>
                </>
                    );}
}
