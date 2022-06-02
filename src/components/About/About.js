import React from 'react';
import { Hero } from '../Hero/Hero';

export const About = (props) => {
    return (
        <>
            <section className="aboutTopSection">
                <Hero />
                <div className='aboutPageSummary'>
                    <h1>About</h1>
                    <p>An athlete by heart, a traveller by day, a poet at night. 
                        Play music with the tunes of the universe.</p>
                </div>
            </section>
        </>
    )
}