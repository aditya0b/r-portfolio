import React from "react";
import {Route, Routes} from 'react-router-dom'
import { Contact } from "./Components/Routes/Contact Form/contact";
import { Science } from "./Components/Routes/Science/Science";
import { Structure } from "./Structure";
import { Experiments } from "./Components/Routes/Experiments/Experiments";
import { GraphOG } from "./Components/Routes/GraphOFGrowth/GoG";
import { Ideas } from "./Components/Routes/Ideas/Ideas";
import { Mindmaps } from './Components/Routes/Mindmaps/Mindmaps'
import { Models } from "./Components/Routes/Models/Models";
import { Modules } from "./Components/Routes/Modules/Modules";
import { Activities } from "./Components/Routes/Activities/Activities";
const Paths = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Structure />} />
                <Route path="/contact" element={<Contact />}/>
                <Route path="/science" element={<Science />}/>
                <Route path="/science/experiments" element={<Experiments />}/>
                <Route path="/science/graphOG" element={<GraphOG />}/>
                <Route path="/science/ideas" element={<Ideas />}/>
                <Route path="/science/mindmaps" element={<Mindmaps />}/>
                <Route path="/science/models" element={<Models />}/>
                <Route path="/science/modules" element={<Modules />}/>
                <Route path="/science/activities" element={<Activities />}/>
            </Routes>
        </>
    )
}

export { Paths }