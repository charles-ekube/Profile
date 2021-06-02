import React, { useContext }from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import './style.css';

const ThemeToggle = () => {

    const {handleToggle} = useContext(ThemeContext)


  return (
    <>
    <div>
    <label className='switch' >
            <input type='checkbox' onClick={handleToggle}/>
            <span className='slider round'></span>
        </label>
    </div>
        
    </>
  )

}

export {ThemeToggle};
