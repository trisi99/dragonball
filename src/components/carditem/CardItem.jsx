import './CardItem.css'
import { Link } from "react-router-dom";

const CardItem = (props) => {

    return ( 
        <>
        <article className="ciArt">
            
                <Link to={`/detail/${props.id}`}><img src={props.image} alt="" /></Link>
            
            <div className="ciDiv2">
            <h1>{props.name}</h1>
            </div>
        </article>
        </>
     );
    
}
 
export default CardItem;