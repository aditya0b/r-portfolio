import React from 'react'
import './style/ed.css'

const EarthDay = () => {
    return (
        <>
            <div className="Body" id='EarthDay-B'>
                <div className="tophead-ED">
                    <button href='/' onClick={() => {
                        alert('Hello World !')
                    }} className="btn btn-primary" id='ED-Morebtntop'>More ⬇</button>
                </div>
                <div className="bottom-ED">
                    <h3 className="h3">22nd April 2022</h3>
                    <h1 className="h1 text-bold" style={{ fontWeight: 'bolder', letterSpacing: '0.2vw' }}>EARTH DAY</h1>
                    <h5 className="h5">Invest in our Planet</h5>
                    <button href='/' onClick={() => {
                        window.scrollTo(0,400)
                    }} className="btn btn-primary" id='ED-Morebtn'>More ⬇</button>
                </div>
            </div>
            <div className="Ed-what">
                <div style={{
                    width: '100%',
                    height: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <h2 style={{
                        fontWeight: 'bolder',
                        padding: '1vw',
                        fontSize: '3vw'
                    }} className="h2">What is Earth Day ?</h2>
                </div>
                <div style={{ height: '70%', width: '100%', fontWeight: 'bold', paddingLeft: '2vw' }}>
                    <p className="" style={{ fontSize: '1.5vw', marginTop: '0' }}>Earth day is the most widely celebrated Environmental event in the world.<br />
                    It's demonstrates support for environmental protection. <br />
                    It was first celebrated on April 22 1970, and from then onwards it is celebrated on April 22 every year. <br />
                    In the year 2022 the theme choosen is "Invest in Our Planet". <br />
                    The first Earth Day was focused on United States. <br />
                    It includes a wide range of events coordinated globally by EarthDay.org. <br />
                    EarthDay.org is also known as the "Earth Day Network".
                    </p>
                </div>
            </div>
        </>
    )
}

export { EarthDay }