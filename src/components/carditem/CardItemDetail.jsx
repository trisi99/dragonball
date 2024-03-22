import './CardItem.css'
import { Link } from "react-router-dom";

const CardItemDetail = (props) => {

    return ( 
        <>
        <article className="ciArt">
            
                <img src={props.image} alt="" onClick={props.fun}/>
            
            <div className="ciDiv2">
                
            <h1>{props.name}</h1>
            </div>
        </article>
        </>
     );
    
}
 
export default CardItemDetail;