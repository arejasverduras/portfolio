import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

export const ProjectReadMe = () => {
    const file_name = 'README.md';
    const [post, setPost] = useState('');

    useEffect(()=>{
        import(`../../../markdown/${file_name}`)
        // import ('https://raw.githubusercontent.com/arejasverduras/portfolio/main/README.md')
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
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