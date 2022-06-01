import React from 'react';

export const HeroOptionalText = (props) =>{
    return (
        <>
        <section className='optionalTextSection' id="heroOptionalText">
            <h2>What a legend!</h2>
            <p>And good looking too..</p>
        </section>
        <section className='optionalLogoSection' id="heroOptionalText">
                <h2>as trusted by</h2>
                <ul className='logoList'>
                    <li>logo1</li>
                    <li>logo1</li>
                    <li>logo1</li>
                </ul>
        </section>
        </>
    )
}