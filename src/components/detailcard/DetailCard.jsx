import './DetailCard.css'
const DetailCard = (props) => {
    return ( 
        
            <article className="detcardart">
                <img src={props.image} alt="" />
                <div className="detcarddiv1">
                    <h1>{props.name}</h1>
                    <p className='cardp'>{props.button}</p>
                    </div>
                <div className="detcarddiv2">
                    <p className="detcardp1"><span>Affiliation: </span>{props.affiliation}</p>
                    <p className="detcardp2"><span>Race: </span> {props.race}</p>
                    <p className="detcardp3"><span>KI: </span> {props.ki}</p>
                    <p className="detcardp4"><span>Max. KI: </span> {props.maxKi}</p>

                </div>
                <div className="detcarddiv3">
                <p className="detcardp5">{props.description}</p>
                </div>
            </article>
        
     );
}
 
export default DetailCard;