import React from "react";
import './Style/activities.css'
import { COMCards } from "../../Common/COMCards/COMCards";
import { data } from "../../Common/COMCards/COMdata";
import activity1 from '../../../Global/assets/Digestive Glands.pdf'

const Activities = () => {
    return(
        <>
            <link rel="stylesheet" href="" />
            <div className="Body" id="ExperimentsB">
                <COMCards embed={activity1} heading="Digestive Glands in Human Body and their Functions." />
            </div>
        </>
    )
} 

export { Activities }