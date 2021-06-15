import React, {useContext} from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import './style.css';
import {MdClose} from 'react-icons/md';


const CloseNavToggle = () => {

    const {closeNav} = useContext(ThemeContext);
    

    return (
        <>
            <button className='close-nav-btn' onClick={closeNav} >
               <MdClose/>
            </button>
        </>
    )
}

export {CloseNavToggle};