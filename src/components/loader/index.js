import { useEffect, useState } from 'react';
import './style.css';




const Loader = () => {

    const [progress, setProgress] = useState(5);

    useEffect(() => {

        let timer = window.setTimeout(function() {
            if(progress < 100) {
                const newProgress = progress + 10;
                setProgress(newProgress);
            }else {
                window.clearTimeout(timer);
                setProgress(5);
            }
        },1400)
        return () => {
            window.clearTimeout(timer) 
        }
    }, [progress]);

    
    return (
        <>
            {/* <section className='app-loader'>
                <div className='lds-facebook'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section>    */}

            <div className='loader-container animate__animated animate__fadeInUp'>
                <div className='loader'>
                    <div className='loader-bar' style={{width:`${progress}%`}}></div>
                </div>
            </div>
        </>
    )
}

export {Loader}
