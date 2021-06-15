import React, {useContext} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Loader, NavTogglebutton } from '../../../components';
import { ThemeContext } from '../../../Context/themeContext';



const Home = () => {
    AOS.init(); 
    const {isloading} = useContext(ThemeContext);


    return (
        <>
        {isloading ? (
            <Loader/>
        ) : (
            <main className='animate__animated animate__fadeInUp animate__slower'>
                <div className='logo'>
                    <h1>Bobby The Creatr</h1>
                </div>
                <div>
                    <NavTogglebutton/>
                </div>
                <section className='home-container'>
                    <article>
                        <h2 className='animate__animated animate__fadeInUp animate__delay-2s animate__slower'>
                             Hello, my name is Charles Ekube a frontend developer
                             
                        </h2>
                        <button className='animate__animated animate__fadeInUp animate__delay-3s animate__slower'>
                            <Link to='/projects'>
                                Projects
                                <span>
                                    /
                                </span>
                            </Link>
                        </button>
                    </article>
                    <div className='photo-container animate__animated animate__fadeInUp animate__delay-4s animate__slower'>
                    </div> 
                </section>
                <section className='more-details'>
                    <article className='more-details-article'>
                        <h3>
                            How can i help you ?
                        </h3>
                        <p>
                            Have a project you want to build? that's where I come in!
                        </p>
                        <p>
                            djdjdjdjdjdjdjdjdjdjdj
                        </p>
                        <p>
                            shsghcscghcghscs
                            dygcsdgchsdchdchdgcghdcdc
                        </p>
                    </article>
                    <div className='more-details-skills'>
                        <h4>
                            Skills
                        </h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>GraphQL</li>
                            <li>React Native</li>
                        </ul>
                    </div>
                </section>
            </main>
            )}
        </>
    )
} 

export {Home}