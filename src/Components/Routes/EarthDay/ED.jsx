import React from 'react'
import './style/ed.css'

const EarthDay = () => {
    return (
        <>
            <div className="Body" id='EarthDay-B'>
                <div className="tophead-ED">
                    <button href='/' className="btn btn-primary" onClick={() => {
                        window.scrollTo(0, 400)
                    }} id='ED-Morebtntop'>More ⬇</button>
                </div>
                <div className="bottom-ED">
                    <h3 className="h3">22nd April 2022</h3>
                    <h1 className="h1 text-bold" style={{ fontWeight: 'bolder', letterSpacing: '0.2vw' }}>EARTH DAY</h1>
                    <h5 className="h5">Invest in our Planet</h5>
                    <button href='/' onClick={() => {
                        window.scrollTo(0, 400)
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
                        It includes a wide range of events coordinated globally by <a style={{
                            color: 'yellow'
                        }} href="https://www.earthday.org/">earthday.org</a> <br />
                        It is also known as the "Earth Day Network".
                    </p>
                </div>
                <div className='ED-Importance'>
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
                        }} className="h2">Importance of Earth Day</h2>
                    </div>
                    <div style={{ height: '70%', width: '100%', fontWeight: 'bold', paddingLeft: '2vw' }}>
                        <p className="" style={{ fontSize: '1.5vw', marginTop: '0' }}>For appreciating the uniqueness of our planet Earth. <br />
                            We create awareness among people about Earth and it's issues and problems. <br />
                            Today more than 1 billion people take part in the Earth Day activities every year. <br />
                            Many national and international activities are conducted to understand the biodiversity <br /> and how should we protect our nature - plants, animals and environment. <br />
                        </p>
                    </div>
                </div>
                <div className='ED-Theme'>
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
                        }} className="h2">Invest in Our Planet</h2>
                    </div>
                    <div style={{ height: '70%', width: '100%', fontWeight: 'bold', paddingLeft: '2vw' }}>
                        <p className="" style={{ fontSize: '1.5vw', marginTop: '0' }}>
                            Theme choosen for Earth Day 2022 is "Invest in Our Planet". <br />
                            This features 5 primary programs. <br />
                            Those are : <ul>
                                            <li>The Great Global Cleanup</li>
                                            <li>Sustainable Fashion</li>
                                            <li>Climate and Environmental Literacy</li>
                                            <li>Canopy Project</li>
                                            <li>Food and Environment</li>
                                        </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { EarthDay }