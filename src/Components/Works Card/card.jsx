import React from "react";
import './Style/card.css'
import { data } from "./cardsdata";

const Card = () => {
    return (
        <>
            <div className="maincard">
                <div className="topcard">
                    <img className="Cards-Image" src={data[0].imagesrc} alt="" />
                </div>
                <div className="bottomcard">
                    <div style={{
                        height: '60%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                        <div style={{
                            width: '80%',
                            height: '100%',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <h1 className="h1" id="CRhead">Science Section</h1>
                        </div>
                        <div style={{
                            width: '20%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <a href="/science">
                                <button id="CRView" className="btn-warning btn">View</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="CRDesc" style={{height: '10%', width: '100%', position: 'relative' }}>
                    <p>{data[0].description}</p>
                </div>
            </div>
        </>
    )
}

export { Card }