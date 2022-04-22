import React from "react";
import './Style/activities.css'
import { COMCards } from "../../Common/COMCards/COMCards";
import activity1 from '../../../Global/assets/Digestive Glands.pdf'
import activity2 from '../../../Global/assets/Earthday3.gif'


const Activities = () => {
    return (
        <>
            <link rel="stylesheet" href="" />
            <div className="Body" id="ExperimentsB">
                <COMCards embed={activity1} heading="Digestive Glands in Human Body and their Functions." />

                <a style={{textDecoration:'none'}} href="/science/earthday" className="COMMain">
                    <div className="COMTop" style={{backgroundColor:'#F1E9D2'}}>
                        <embed className="embed" style={{width:'auto', height:'80%'}} src={activity2} type="" />
                    </div>
                    <div className="COMDown">
                        <h1 className="COMHeading">Earth Day</h1>
                    </div>
                </a>
            </div>
        </>
    )
}

export { Activities }