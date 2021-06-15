import React from 'react';
import './style.css';
import {NavTogglebutton, PreviousBtn} from '../../../components'

const Projects = () => {
    return(
        <>
             <NavTogglebutton/>
             <PreviousBtn/>
            <main>
                <h2 className='projects-title'>Projects</h2>
                <section className='projects-container'>
                <div className='projects-card'>
                       <div className='projects-card-title'>
                           <h4>PRODUCT</h4>
                           <p>
                               Just Originals
                                <span>Web</span>
                           </p>
                       </div>
                       <div className='projects-card-logo'>
                       </div>
                    </div>
                    <div className='projects-card'>
                       <div className='projects-card-title'>
                           <h4>PRODUCT</h4>
                           <p>Just Originals</p>
                       </div>
                       <div className='projects-card-logo'>
                       </div>
                    </div>
                </section>
            </main>
        </>

    )
}

export {Projects}