import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Project } from '../../projects'

import './ProjectPage.scss'

interface ProjectPageProps {
    project: Project
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
    const navigate = useNavigate();

    return (
        <div className='project'>
            <div className='project-top-container'>
                <div className='project-top-blur' />
                <div className='project-top'>
                    <span className='hover-fill-link' onClick={() => navigate('/')}>Back to Home</span>
                    {project.link ? 
                        <span className='hover-fill-link'><a href={project.link} target="_blank" rel="noreferrer">View Live</a></span> 
                        : project.title
                    }
                </div>
            </div>

            <div className='project-content'>
                <div className='project-header'>
                    <span className='project-title'>{project.title}</span>
                    <span className='project-desc'>{project.year} — {project.subtitle}</span>
                </div>
            
                <img className="project-img" src={project.headerImage} alt=""/>

                {project.content.map((content: {src: string, text?: string | undefined}, index) => {
                    return (
                        <div className='project-content-item' key={`content-item-${index}`}>
                            <img className="project-img" src={content.src} alt="" />
                            { content.text && <span className='project-content-text'>{content.text}</span> }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectPage