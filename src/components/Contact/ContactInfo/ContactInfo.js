import React from "react";
import { useSelector } from "react-redux";
import { selectContact } from "../ContactSlice";

export const ContactInfo = (props) => {
    const contactInfoListStore = useSelector(selectContact);

    const contactEntries = Object.entries(contactInfoListStore);
    
    return (   
        <>        
            <img className="contactImage" src='./images/arantxa.png' alt="Michiel's dog Arantxa"></img>
            <div className='contactInfo'>
                <h1>Contact</h1>
                <table className="contactTable">
                    <tbody>
                    {contactEntries.map(([key, value]) => 
                        <tr key={key}>
                            <td style={{"width": "30%"}}colSpan="1" className="contactKey">{key}</td>
                            <td className="contactValue">{value}</td>
                        </tr>              
                    )}
                    </tbody>
                </table>
            </div>
            <div className="isolate">
                <div className="noise">hallo</div>
                <div className="overlay"></div>
            </div>
        </>
    )
}