import React from 'react';
import './Pages.css';
import { Bobby } from '../assets';

const Home = () => {
    return (
        <main className='home'>
            <section className='intro'>
                <article></article>
                <div className='bobby'>
                    <span className='bobby-overlay'></span>
                </div>
                {/* <img src={Bobby} alt='poster'/> */}
            </section>
        </main>
    )
}

export {Home}
