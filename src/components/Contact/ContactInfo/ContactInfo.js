import React from "react";

export const ContactInfo = (props) => {
    const contactInfoList = {
        mail: "info@arejo.nl",
        phone: '+31622040319',
        github: <a href="https://github.com/arejasverduras">gitHub</a>,
        linkedin: <a href="https://linkedin.com/michielroukens">linkedIn</a>
    }

    const contactEntries = Object.entries(contactInfoList);
    
    return (   
        <>        
            <img className="contactImage" src='./images/arantxa.png' alt="Michiel's dog Arantxa"></img>
            <div className='contactInfo'>
                <h1>Contact</h1>
                <table className="contactTable">
                {contactEntries.map(([key, value]) => 
                    <tr>
                        <td style={{"width": "30%"}}colSpan="1" className="contactKey">{key}</td>
                        <td className="contactValue">{value}</td>
                    </tr>              
                )}
                </table>
            </div>
        </>
    )
}