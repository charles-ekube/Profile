import React, {createContext, useEffect, useState} from 'react';


export const ThemeContext = createContext();

const ThemeContextProvider  = (props) => {

    const [showNav, setShowNav] = useState(false);
    const [isloading, setIsLoading] = useState(true);
     

   const openNav = () => {
       setShowNav(prev => !prev);
   }
   const closeNav = () => {
    setShowNav(false);
   }


   useEffect(() => {
       setTimeout(() => setIsLoading(false), 15000);
   }, [setIsLoading])
    
    return(
        <>

        <ThemeContext.Provider value={{showNav, openNav, closeNav, isloading}}>
            {props.children}
        </ThemeContext.Provider>
        </>
    )

}

export {ThemeContextProvider}