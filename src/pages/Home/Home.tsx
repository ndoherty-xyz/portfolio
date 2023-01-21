import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, GitHub, Mail, Twitter } from 'react-feather';
import { useNavigate } from 'react-router-dom';

import { projects } from '../../projects';

import './Home.scss';

const Home = () => {
  const navigate = useNavigate();
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight)

  window.addEventListener('resize', () => {
    setWindowHeight(window.innerHeight)
  })


  let activeProject = projects[activeProjectIndex] 

  return (
    <div className='home' style={{height: windowHeight}}>
      <div className='home-top'>
          <span>ndoherty.xyz</span>
          <div>
            <Mail size={14} strokeWidth={2.5} onClick={() => window.open('mailto:ndoherty.xyz@gmail.com', '_blank')} />
            <Twitter size={14} strokeWidth={2.5} onClick={() => window.open('https://twitter.com/ndoherty_xyz', '_blank')} />
            <GitHub size={14} strokeWidth={2.5} onClick={() => window.open('https://github.com/ndoherty-xyz', '_blank')} />
          </div>
      </div>

      <div className='home-center'>
          <img className='home-img' src={activeProject.headerImage} alt={`${activeProject.title} on a laptop screen.`} />
          <div className='home-center-project'>
            <ArrowLeft 
              size={30} 
              strokeLinecap={undefined} 
              strokeLinejoin={undefined} 
              onClick={() => {
                let newIndex = activeProjectIndex - 1;
                newIndex < 0 ? setActiveProjectIndex(projects.length - 1) : setActiveProjectIndex(newIndex)
              }}
            />
            <div className='home-center-project-text' onClick={() => navigate(activeProject.slug)}>
              <span className='home-center-project-text-title'>{activeProject.title}</span>
              <span> ✱ {activeProject.subtitle}, {activeProject.year}</span>
            </div>
            <ArrowRight 
              size={30} 
              strokeLinecap={undefined} 
              strokeLinejoin={undefined}  
              onClick={() => {
                let newIndex = activeProjectIndex + 1;
                newIndex > projects.length - 1 ? setActiveProjectIndex(0) : setActiveProjectIndex(newIndex)
              }}
            />
          </div>
          {/* <div className='home-center-project-info' onClick={() => navigate(activeProject.slug)}>
            <span className='home-center-project-info-title'>{activeProject.title}</span>
            <span>{activeProject.year}</span>
          </div>
          <div className='home-center-stepper'>
          <span 
              className='arrow' 
              onClick={() => {
                let newIndex = activeProjectIndex - 1;
                newIndex < 0 ? setActiveProjectIndex(projects.length - 1) : setActiveProjectIndex(newIndex)
              }}
            >
              ←
            </span>
            <span>{activeProjectIndex + 1} of {projects.length}</span>
            <span 
              className='arrow' 
              onClick={() => {
                let newIndex = activeProjectIndex + 1;
                newIndex > projects.length - 1 ? setActiveProjectIndex(0) : setActiveProjectIndex(newIndex)
              }}
            >
              →
            </span>
          </div> */}
      </div>
    </div>
  )
}


export default Home;