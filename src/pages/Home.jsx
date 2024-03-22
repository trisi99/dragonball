import CardList from "../components/cardlist/CardList";
import Header from "../components/header/Header";
import { useEffect, useState } from 'react';
import Dragonballs from '../assets/img/dragonballs.png'
const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        window.scrollTo(0,0)
        setIsLoading(false)
    },[])
    return ( 
        <>
        {isLoading ? (
            <div className="loading">
                <img src={Dragonballs} alt="" />
            </div>
        ): (
            <>
        
        <Header/>
        <CardList/>
        </>
        )}
        </>
      );
}
 
export default Home;