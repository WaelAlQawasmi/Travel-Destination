import data from "../../data/db.json"
import './Tours.css'

function Tours(){
    return( 
  
   <div class="tours">
       {
           
data.map(ele=>{
    return(
<div class="card">
    <img src= {ele.image}/>
<div>{ele.name}
</div>
</div>
      
  
    );
    
}

)

       } 

        </div>
    );
}
export default Tours;