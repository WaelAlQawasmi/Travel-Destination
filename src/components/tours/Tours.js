
import './Tours.css'
import { Link } from "react-router-dom";



function Tours(prop) {
    return (

        <div class="tours">
            {

                prop.data.map(ele => {
                   let url= "Tour/"+ele.id;
                    return (
                       <div class="card">
                            
                            <img src={ele.image} />
                            <div onClick={prop.setInfo(ele.info)}>  <Link to={url} >  {ele.name}
                            </Link>
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