import React from 'react'
import { Scards } from '../../SCards/Scards'
import './Style/science.css'
import { data } from '../../SCards/DataSCARDS'

const Scard = (val) => {
    return (
        <Scards head={val.head} anchor={val.anchor} />
    )
}

const Science = () => {
    return (
        <>
            <div className="Body" id='SBODY'>

                {data.map(Scard)}
            </div>
        </>
    )
}

export { Science }