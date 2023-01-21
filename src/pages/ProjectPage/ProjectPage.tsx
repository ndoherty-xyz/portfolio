import React from 'react'
import { GitHub, Mail, Twitter } from 'react-feather'
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
                    <span onClick={() => navigate('/')}>BACK</span>
                    <div>
                        <Mail size={14} strokeWidth={2.5} onClick={() => window.open('mailto:ndoherty.xyz@gmail.com', '_blank')} />
                        <Twitter size={14} strokeWidth={2.5} onClick={() => window.open('https://twitter.com/ndoherty_xyz', '_blank')} />
                        <GitHub size={14} strokeWidth={2.5} onClick={() => window.open('https://github.com/ndoherty-xyz', '_blank')} />
                    </div>
                </div>
            </div>

            <div className='project-content'>
                <div className='project-header'>
                    <span className='project-title'>{project.title}</span>
                    <span className='project-desc'>{project.subtitle}, {project.year}</span>
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