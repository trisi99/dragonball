import { useContext, useEffect } from "react";
import { FetchContext } from "../components/Context";

const Fetch = () => {
    const {data, setData } = useContext(FetchContext)
    const newArr = []
    useEffect(()=>{
        
            fetch(`https://dragonball-api.com/api/characters?limit=60`)
            .then(res=>res.json())
            .then(data=>setData(data))
            
            
        
    },[])
    
    
}
 
export default Fetch;