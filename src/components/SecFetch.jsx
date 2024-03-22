import { useContext, useEffect } from "react";
import { FetchContext, SecFetchContext } from "./Context";

const SecFetch = () => {
    const { data, setData } = useContext(FetchContext);
    const { SecData, setSecData } = useContext(SecFetchContext);

    

    useEffect(() => {
        const fetchDetails = async () => {
            if (!data.items) return;
            
            const secArr = await Promise.all(
                data.items.map(async (item) => {
                    try {
                        const response = await fetch(`https://dragonball-api.com/api/characters/${item.id}`);
                        const details = await response.json();
                        return details;
                    } catch (error) {
                        console.error("Error fetching details:", error);
                        return null; 
                    }
                })
            );

            setSecData(secArr.filter((details) => details !== null));
        };

        fetchDetails();
        // const dbDetails=[]
        // data.items.forEach((dbInfo, index)=>{
        //     fetch(`https://dragonball-api.com/api/characters/${item.id}`)
        //     .then((res)=>res.json())
        //     .then((newData)=>{dbDetails.push(newData)
        //     if (index === data.items.length - 1){
        //         setSecData(dbDetails)
        //     }
        //     })
        //     .catch((err)=>{console.error('Error fetching data:',error)})
        // })
    }, [data, setSecData]);
    console.log(SecData);
    

    
    return null;
};

export default SecFetch;
