import React from 'react';
import { NavTogglebutton, PreviousBtn } from '../../../components';
import './style.css';
import {useHistory} from 'react-router-dom';




const Playground = () => {


    const history = useHistory()
    const previousPage = () => {
        history.goBack();
    }


    return (
        <>
            <NavTogglebutton />
            <PreviousBtn onClick={previousPage}/>  
        </>
    )
}

export {Playground}
