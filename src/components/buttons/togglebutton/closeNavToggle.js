import React, {useContext} from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import './style.css';


const CloseNavToggle = () => {

    const {isLightTheme, light, dark, closeNav} = useContext(ThemeContext);
    const theme = isLightTheme ? dark : light;

    return (
        <>
            <button className='close-nav-btn' onClick={closeNav}>
                <span id='close-left' >
                <span id='close-right'></span>
                </span>
               
            </button>
        </>
    )
}

export {CloseNavToggle};