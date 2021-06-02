import React, {useContext} from 'react';
import './styles.css';
import { ThemeContext } from '../../../Context/themeContext'
import {ThemeToggle, CloseNavToggle} from '../../buttons';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {

AOS.init();   
const {isLightTheme, light, dark, showNav} = useContext(ThemeContext);
    const theme = isLightTheme ? dark : light;

return (
    <>
    {showNav ? (

            <header>
                <nav className='navbar ' style={{background:theme.ui, color:theme.syntax}}
                 data-aos="fade-left"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="false"
                 >
                    <ul className='navbar-list'>
                        <li className='navbar-list-item'>Home</li>
                        <li className='navbar-list-item'>About</li>
                        <li className='navbar-list-item'>Skills</li>
                        <li className='navbar-list-item'>Projects</li>
                        <li className='navbar-list-item'><ThemeToggle/></li>
                    </ul>
                    {/* <CloseNavToggle/> */}
                </nav>
                
            </header>


    ): null}
    
    </>
)

}

export {Navbar}