import { Link } from "react-router-dom";
import "./Nav.css";


function Nav(){
    return(
   
      <div><Link to='/'>  Home </Link>
<Link to="Tour/2">About</Link>
      </div>  
    
    
    );
}

export default Nav;