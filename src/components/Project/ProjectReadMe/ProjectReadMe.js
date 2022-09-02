import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

export const ProjectReadMe = ({readMe}) => {
    const fileLocation = readMe.length > 1? readMe : './NoReadMe.md';
    const [post, setPost] = useState('');

    useEffect(()=>{
        fetch(fileLocation)
            .then(res => res.text())
            .then(res => setPost(res))
            .catch(err => console.log(err));
    });

    return (
        <div className="ReadMe">
            <Markdown>
                {post}
            </Markdown>
        </div>
    )
};