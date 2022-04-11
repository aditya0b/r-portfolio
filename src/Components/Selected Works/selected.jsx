import React from 'react'
import './Style/selected.css'
import { Card } from '../Works Card/card';
const SelectedWorks = () => {
    return (
        <>
            <div className="Mainworks" id='SCROLLMAINWORKS'>
                <div className="topworks">
                    <h1 className='fw-bold' id='selected_heading'>Selected Works</h1>
                </div>
                <div className="cardscontent">
                    <Card />
                </div>
            </div>
        </>
    )
}

export { SelectedWorks }