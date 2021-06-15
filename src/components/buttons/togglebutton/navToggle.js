import React, {useContext} from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import './style.css';


const NavTogglebutton = () => {

    
    const {openNav} = useContext(ThemeContext);
 
 
    return (
        <>
            <button className='toggle-button' onClick={openNav}> 
                <span ></span>
                <span ></span>
                <span ></span>
            </button>
        </>
    )
}

export {NavTogglebutton}
