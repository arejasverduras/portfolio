import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

export const ProjectReadMe = () => {
    const fileLocation = 'https://raw.githubusercontent.com/arejasverduras/portfolio/main/README.md';
    const [post, setPost] = useState('');

    useEffect(()=>{
        fetch(fileLocation)
            .then(res => res.text())
            .then(res => setPost(res))
            .catch(err => console.log(err));
    });

    return (
        <div className="Readme container">
            <Markdown>
                {post}
            </Markdown>
        </div>
    )
};