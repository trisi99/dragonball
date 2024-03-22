import { Link, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import { useContext, useEffect, useState } from 'react';
import { RenderDataContext, SecFetchContext } from "../components/Context";
import DetailCard from "../components/detailcard/DetailCard";
import CardItem from "../components/carditem/CardItem";
import CardItemDetail from "../components/carditem/CardItemDetail";
import DBLogo from '../assets/img/DragonBallLogo.png'
import Dragonballs from '../assets/img/dragonballs.png'



const Detail = () => {
    const { SecData, setSecData } = useContext
    (SecFetchContext)
    const { renderData, setRenderData } = useContext(RenderDataContext)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedTransformation, setSelectedTransformation] = useState(null)
    const param = useParams()
    const id = param.id

    const filteredCharacter = SecData?.filter((character)=>{
        return character.id.toString() === id.toString()
            
        }
    )
    useEffect(()=>{
        window.scrollTo(0,0)
        setIsLoading(false)
        setRenderData(filteredCharacter)
    },[setRenderData])
    
    
        
    const detSearch = (e) =>{
        
            const filtered = SecData?.filter((character)=>{
                return character.name.toLowerCase()=== e.target.value.toLowerCase()
            })
            setRenderData(filtered)
        
        
        
    }
        const handleTransformation = (transformation)=>{
            window.scrollTo(0,0)
            setSelectedTransformation(transformation)
        }
        const getBack = ()=>{
            window.scrollTo(0,0)
            setSelectedTransformation(null)
        }

    
        console.log(filteredCharacter);
        
    return ( 
        <>
        {isLoading ? (
            <div className="loading">
                <img src={Dragonballs} alt="" />
            </div>
        ): (
            <>
        
         <div className='headerdiv'>
        <Link to='/'><h1><img src={DBLogo} alt="" /></h1></Link>
        
        </div>
        <section className="detailSec">
            
            {selectedTransformation ? (
                <DetailCard
                key={selectedTransformation.id}
                name={selectedTransformation.transformationName}
                image={selectedTransformation.transformationImage}
                affiliation={selectedTransformation.affiliation}
                race={selectedTransformation.race}
                ki={selectedTransformation.transformationKi}
                maxKi={selectedTransformation.maxKi}
                description={selectedTransformation.description}
                button={<button onClick={getBack} className="backBtn">Go Back to {selectedTransformation.name}</button>}
                />
            ):(renderData?.map((character)=><DetailCard
            key={character.id}
            name={character.name}
            image={character.image}
            affiliation={character.affiliation}
            race={character.race}
            ki={character.ki}
            maxKi={character.maxKi}
            description={character.description}
            />))}
            
        </section>
        <h1 className="transsech1">Transformations</h1>
        <section className="transSec">
            
        {renderData?.map((characterf)=>characterf.transformations.map((character)=>{return<CardItemDetail
            key={character.id}
            
            name={character.name}
            image={character.image}
            fun={()=>handleTransformation({
                transformationImage: character.image,
                transformationName: character.name,
                transformationKi: character.ki,
                id: characterf.id,
                affiliation: characterf.affiliation,
                race: characterf.race,
                maxKi: characterf.maxKi,
                description: characterf.description,
                name: characterf.name
            })}/>}))}
        </section>
        </>
        )}
        </>
    );
}
 
export default Detail;