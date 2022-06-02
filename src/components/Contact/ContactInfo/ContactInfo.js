import React from "react";

export const ContactInfo = (props) => {
    const contactInfoList = {
        mail: "info@arejo.nl",
        phone: '+31622040319',
        github: <a href="https://github.com/arejasverduras">gitHub</a>,
        linkedin: <a href="https://linkedin.com/michielroukens">linkedIn</a>
    }
    
    return (           
        <div className='contactInfo'>
            <h1>Contact</h1>
            <p>Artist by heart, traveller by day, coder at night. 
                Play music with the tunes of the universe.</p>
        </div>
    )
}