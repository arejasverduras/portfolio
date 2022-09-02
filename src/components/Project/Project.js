import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProjects } from '../Projects/ProjectsSlice';
import { Link } from 'react-router-dom';
import { catLabels, techLabels } from '../Projects/projectsFeatures';
import { ImageSlider } from '../../features/ImageSlider/ImageSlider';
import { ProjectReadMe } from './ProjectReadMe/ProjectReadMe';

export const Project = () =>{
    const params = useParams();
    let id = Number(params.projectId);
    console.log(`id = ${id}`);

    const [currentProject, setCurrentProject] = useState(id);


    const allProjects = useSelector(selectProjects);
    const filteredProject = allProjects.filter(pr => 
        pr.id === currentProject
    );
    // console.log(filteredProject);
    const project = filteredProject[0];



    const {name, client, description, images, tech, cat, type, demoLink, sourceLink, readMe } = project;
        
    useEffect(()=>{
        setCurrentProject(id);
    },[id])

    return (
        <div className="Project">
        <article className='projectContainer'>
            <ImageSlider images={images}/>
            <div className="projectContent">
            <h1 className="projectTitle">{name} || {client} || {type} </h1>
                    <p className={catLabels(cat)}>{cat}</p>
                    <p className="projectDescription">{description}</p>
                    <ul className="projectLinks">
                        <li><a href={demoLink} target="blank">Live Demo</a></li>
                        <li><a href={sourceLink} target="blank">View Source on GitHub</a></li>
                    </ul>
                    <ul className="projectTileTech">
                         {tech.map((tech, index) => (
                            <li key={index} className={techLabels(tech)}>{tech}</li>
                        ))}
                    </ul>
                    <h2 className="readmeHeader">Read Me</h2>
                    <p><i>README.md loaded from project's github repository</i></p>
                    <hr></hr>
                    <ProjectReadMe readMe={readMe} />
            </div>

        </article>
        <div className='projectButtons'>
            <Link to={`/projects/${
                currentProject !== 1 ? currentProject-1 : allProjects.length
                }`}
                className="projectButton prevButton">Previous project
            </Link>
            <Link to={`/projects/${
                currentProject !== allProjects.length ? currentProject+1 : 1
                }`}
                className="projectButton nextButton"
                >Next project
            </Link>
        </div>
        </div>
    )
}