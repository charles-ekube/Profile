import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import './style.css';

const PreviousBtn = () => {

    return (
        <>
            <button className='previous-btn'>
                <MdArrowBack/>
            </button>
        </>
    )
}

export {PreviousBtn};