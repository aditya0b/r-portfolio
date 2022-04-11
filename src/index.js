import React from 'react'
import ReactDOM from 'react-dom'
import { Structure } from './Structure'
import { Paths } from './Routed-paths'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
    <>
        <BrowserRouter>
            <Paths />
        </BrowserRouter>
    </>
    , document.querySelector('#root')
)