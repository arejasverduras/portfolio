import React from 'react';
import MichielHero from '../Hero/MichielHero.png';
import { HeroOptionalText } from '../Hero/HeroOptionalText/HeroOptionalText';
import { ContactInfo } from './ContactInfo/ContactInfo';

export const Contact = (props) => {
    
    return (
            <section className="contactTopSection">
                 <img className="heroImage" src={MichielHero}></img>
                 <ContactInfo />
            </section>
            
    )
}