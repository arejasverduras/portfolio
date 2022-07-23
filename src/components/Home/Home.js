import React from 'react';
import { Hero } from '../Hero/Hero';
import { HeroButtons } from '../Hero/HeroButtons/HeroButtons';
import { HeroOptionalText } from '../Hero/HeroOptionalText/HeroOptionalText';

export const Home = (props) => {
    return (
        <div className="Home">
            {/* <div className="backgroundCenterDot"></div> */}
            <Hero />
            {/* <HeroButtons /> */}
            <HeroOptionalText />
        </div>
    )
}