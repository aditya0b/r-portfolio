import React from 'react'
import './CSS/Global-Blogs.css'
import './CSS/Homepage.css'
const Blogs = () => {
    return (
        <>
            <div className="Body" id='B-Body'>
                <div className="B-TopBTNS">
                    <a href='/' type="button" class="btn btn-dark B-HOME">Home</a>
                </div>
                <div className="B-TopHead">
                    <div className="B-Heading">
                        <p className="heading-B">My Blogs</p>
                        <p className="B-desc">You are free to explore</p>
                    </div>
                    <div className="B-Search">
                        <form class="form-floating" style={{width:'80%'}}>
                            <input type="text" class="form-control" id="Search" placeholder="Search" />
                                <label style={{color:'black'}} for="Search">Search</label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Blogs }