import React, { useContext }from 'react'
import { ThemeContext } from '../../../Context/themeContext';
import './style.css'
import ReactTypingEffect from 'react-typing-effect';
import { Bobby } from '../../../assets';



const Home = () => {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? dark : light;

    return (
        <>
            <main style={{background:theme.ui, color:theme.syntax}}>
                <div className='logo'>
                    <h1>Bobby The Creatr</h1>
                </div>
                <section className='home-container'>
                    <article>
                        <p>
                        <ReactTypingEffect
                            text={["Hello, my name is Charles Ekube a frontend developer"]}
                        />
                        </p>
                    </article>
                    <div>
                        <img src={Bobby} alt='poster' />
                    </div> 
                </section>
            </main>
        </>
    )
} 

export {Home}