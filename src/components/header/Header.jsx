import './Header.css'
import DBLogo from '../../assets/img/DragonBallLogo.Png'
import { Link } from 'react-router-dom';
import { RenderDataContext, SecFetchContext } from '../Context';
import { useContext, useState } from 'react';

const Header = () => {
    const { SecData, setSecData } = useContext
    (SecFetchContext)
    const { renderData, setRenderData } = useContext(RenderDataContext)
    const [searchItem, setSearchItem] = useState('')
    const SearchFunc = (e) =>{
        setSearchItem(e.target.value)
        
        
        const filteredChar = SecData?.filter((character)=>{
            return character.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRenderData(filteredChar)
    }
    return ( 
        <>
        <div className='headerdiv'>
        <Link to='/'><h1><img src={DBLogo} alt="" /></h1></Link>
        <input type="search" name="seacrhbar" onChange={SearchFunc} value={searchItem} placeholder='Character Name'/>
        </div>
        </>
     );
}
 
export default Header;