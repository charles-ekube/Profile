import React from 'react';
import './style.css';

const ThemeToggle = () => {

//    let darkMode = localStorage.getItem('darkMode');


//    const enableDarkMode = () => {
//       document.body.classList.add('dark');
//       localStorage.setItem('darkMode', 'enabled')
//    }


//    const disableDarkMode = () => {
//     document.body.classList.remove('dark');
//     localStorage.setItem('darkMode', null)
//  }


//  if(darkMode === 'enabled') {
//    enableDarkMode();
//  }

//    const handleThemeToggle = () => {
//     darkMode = localStorage.getItem('darkMode');
//     if(darkMode !== 'enabled') {
//       enableDarkMode();
//     } 
//     else {
//       disableDarkMode()
//     }
//    }

    


  return (
    <>
    {/* <div>
      
    <label className='switch' >
            <input type='checkbox' onClick={handleToggle}/>
            <span className='slider round'></span>
        </label>
    </div> */}
    <button >
      darkMode
    </button>
        
    </>
  )

}

export {ThemeToggle};
