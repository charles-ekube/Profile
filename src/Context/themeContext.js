import React, {createContext, useState, useEffect} from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider  = (props) => {

    const [isLightTheme, setIsLightTheme] = useState(true);
    const [light, setLight] = useState({});
    const [dark, setDark] = useState({})
    const [showNav, setShowNav] = useState(false);

    useEffect(()=> {
        setLight({syntax : '#fff', ui : '#121212', bg : '#121212' });
        setDark({syntax : '#121212', ui : '#fff', bg : '#121212' })

    },[])
   const handleToggle = () => {
        setIsLightTheme(prev => !prev);
   } 

   const openNav = () => {
       setShowNav(prev => !prev);
   }
   const closeNav = () => {
    setShowNav(false);
   }
    
    return(
        <>

        <ThemeContext.Provider value={{isLightTheme, light, dark, handleToggle, showNav, openNav, closeNav}}>
            {props.children}
        </ThemeContext.Provider>
        </>
    )

}

export {ThemeContextProvider}