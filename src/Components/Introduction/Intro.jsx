import React from "react";
import github from './assets/github-brands.svg'
import email from './assets/at-solid.svg'
import discord from './assets/discord-brands.svg'
import pinterest from './assets/pinterest-brands.svg'
import stackoverf from './assets/stackoverflow-brands.svg'
import quora  from './assets/quora.svg'
import './Style/intro.css'
import './Style/MIntro.css'

const Introduction = () => {
    return (
        <>
            {/* BS Used */}
            <div className="introdiv" id="DeskCIntro">
                <div className="introleft">
                    <h1 className="txt_name">I am Aditya Bagari,</h1>
                    <div className="Textwrapper">
                        <div className="Statictxt">
                            I'm a
                        </div>
                        <ul className="dynamictxt">
                            <li><span>Student</span></li>
                            <li><span>Problem Solving Guy</span></li>
                            <li><span>Full Stack Web Developer</span></li>
                            <li><span>Developer</span></li>
                            <li><span>Learner</span></li>
                            <li><span>Influencer</span></li>
                            <li><span>Foodie</span></li>
                            <li><span>Science Guy</span></li>
                        </ul>
                    </div>
                    <h4 className="txt_region">from India.</h4>
                </div>
                <div className="introright">
                    <a style={{ background: 'transparent', border: 'none' }} className="emailconnect">
                        <img src={email} alt="" onClick={() => { alert('Email : adityabagari54@gmail.com') }} />
                    </a>
                    <a href="https://github.com/aditya0b" target="_blank" className="githubconnect">
                        <img src={github} alt="" />
                    </a>
                    <a href="https://www.quora.com/" target="_blank" className="githubconnect">
                        <img src={quora} alt="" />
                    </a>
                    <a href="https://in.pinterest.com/aditya0b/_created/" target="_blank" className="pinterestconnect">
                        <img src={pinterest} alt="" />
                    </a>
                    <a href="https://stackoverflow.com/users/18678659/aditya0b" target="_blank" className="pinterestconnect">
                        <img src={stackoverf} alt="" />
                    </a>
                </div>
            </div>

            <div className="Mintrodiv" id="MobCIntro">

                <div className="MITop">
                    <p className="MName">👋🏻 Hello There, I am Aditya Bagari</p>
                    <div className="Textwrapper" id="MTXTWrap">
                        {/* <div className="Statictxt">
                                I'm a
                            </div> */}
                        <ul className="dynamictxt" id="MTXTDynamic">
                            <li><span>I'm a Student</span></li>
                            <li><span>I'm a Problem Solving Guy</span></li>
                            <li><span>I'm a Full Stack Web Developer</span></li>
                            <li><span>I'm a Learner</span></li>
                            <li><span>I'm a Developer</span></li>
                            <li><span>I'm a Computer Geek</span></li>
                            <li><span>I'm a Foodie</span></li>
                            <li><span>I'm keen at Science</span></li>
                        </ul>
                    </div>
                    <h4 className="txt_region" id="MTXTLocation">from India.</h4>
                </div>
                <div className="MIBottom">
                    <a style={{ background: 'transparent', border: 'none' }} href="/contact" className="emailconnect">
                        <img src={email} alt=""/>
                    </a>
                    {/* DONE */}
                    <a href="https://github.com/aditya0b" target="_blank" className="githubconnect">
                        <img src={github} alt="" />
                    </a>

                    <a href="https://www.quora.com/profile/Aditya0b" target="_blank" className="quoraconnect">
                        <img src={quora} alt="" />
                    </a>
                    {/* DONE */}
                    <a href="https://in.pinterest.com/aditya0b/_created/" target="_blank" className="pinterestconnect">
                        <img src={pinterest} alt="" />
                    </a>
                    {/* DONE */}
                    <a href="https://stackoverflow.com/users/18678659/aditya0b" target="_blank" className="pinterestconnect">
                        <img src={stackoverf} alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}

export { Introduction }