import React, {useContext} from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import './style.css';


const NavTogglebutton = () => {

    
    const {isLightTheme, light, dark, openNav} = useContext(ThemeContext);
    const theme = isLightTheme ? dark : light;
 
    return (
        <>
            <button className='toggle-button' onClick={openNav} style={{background:theme.ui, color:theme.syntax}}> 
                <span style={{background:theme.ui, borderColor:theme.syntax}}></span>
                <span style={{background:theme.ui, borderColor:theme.syntax}}></span>
                <span style={{background:theme.ui, borderColor:theme.syntax}}></span>
            </button>
        </>
    )
}

export {NavTogglebutton}
