import { useContext, useEffect } from 'react';
import { RenderDataContext, SecFetchContext } from '../Context';
import './CardList.css'
import CardItem from '../carditem/CardItem';

const CardList = () => {
    const { SecData, setSecData } = useContext
    (SecFetchContext)
    const { renderData, setRenderData } = useContext(RenderDataContext)
    useEffect(()=>{
        setRenderData(SecData)
    },[SecData, setRenderData])
    return ( 
        <>
        <section className='cardlistsec'>
        {renderData?.map((character)=><CardItem
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}/>)}
        </section>
        </>
    );
}
 
export default CardList;