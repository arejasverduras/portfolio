import React from 'react';
import MichielHero from '../Hero/MichielHero.png';
import { HeroOptionalText } from '../Hero/HeroOptionalText/HeroOptionalText';
import { ContactInfo } from './ContactInfo/ContactInfo';

export const Contact = (props) => {
    
    return (
        <div className="Contact">
            <section className="contactTopSection">
                 {/* <img className="contactImage" src='./images/arantxa.png' alt="Michiel's dog Arantxa"></img> */}
                 <ContactInfo className="contactInfoComponent" />
            </section>
            </div>
            
    )
}