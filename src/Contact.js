import React from 'react';
import "./Contact.css"

function Contact() {
    return (
        <div className='contact'>
            <div className="title">
                <h1>Join The Wicode Club For The Web</h1>
                <p>Help Yourself And Others Learn How To Code</p>
            </div>
            <form className="signup_form">
                <input type="text" placeholder="email" id="input" className='input'></input><br></br>
                <input type="password" placeholder="password" id="input" className='input'></input><br></br>
                <button className='btn'>signup</button>
            </form>
        </div>
    )
}

export default Contact
