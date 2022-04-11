import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
    const [email, setemail] = useState("")
    const [message, setmsg] = useState("")

    const handlesubmit = async (init) => {
        init.preventDefault();
        fetch('https://aditya0b-default-rtdb.firebaseio.com/Reacieved Emails.json',
        {
            method : "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({email,message})}
            )
            setemail('')
            setmsg('')
            alert("Message Sent !") 
        }
    return (
        <>
            <div className="Body" id='CBODY'>
                <form className="Cform" method='post' onSubmit={handlesubmit}>
                    <div className="Ctop">
                        <div className="CHeading">
                            <h3 className="h3">Contact Me</h3>
                        </div>
                        <div class="" style={{ width: '100%' }}>
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control" value={email} placeholder="name@example.com"
                            requiered
                                onChange={(event) => {
                                    setemail(event.target.value)
                                }}
                             />
                        </div>
                    </div>
                    <div className="Cbottom">
                        <div class="mb-3" style={{ height: '80%' }}>
                            <label class="form-label">Message</label>
                            <textarea class="form-control" value={message}  placeholder='Enter Your Message Here.' required style={{ height: '80%', resize: 'none', verticalAlign: 'text-top' }} 
                                onChange={(event) => {
                                    setmsg(event.target.value)
                                }}
                            />
                        </div>
                        <button type="submit" id='CSubmit' class="btn btn-success">Send</button>
                    </div>
                </form>
                <a href="/" className="btn btn-primary" id='Hreturn'>
                    Home
                </a>
            </div>
        </>

    )
}
export { Contact };