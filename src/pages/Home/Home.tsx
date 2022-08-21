import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { projects } from '../../projects';

import './Home.scss';

const Home = () => {
  const navigate = useNavigate();
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);

  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight)

  window.addEventListener('resize', () => {
    setWindowHeight(window.innerHeight)
  })


  let activeProject = projects[activeProjectIndex] 

  return (
    <div className='home' style={{height: windowHeight}}>
      <div className='home-top'>
          <span>ndoherty.xyz</span>
          <span>v1.0.0</span>
      </div>

      <div className='home-center'>
          <img className='home-img' src={activeProject.headerImage} alt={`${activeProject.title} on a laptop screen.`} />
          <div className='home-center-project-info' onClick={() => navigate(activeProject.slug)}>
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
          </div>
      </div>

      <div className='home-bottom'>
          <span className='home-bottom-link' onClick={() => setAboutOpen(true)}>About</span>
          <span className='home-bottom-link' onClick={() => setContactOpen(true)}>Contact</span>
      </div>

      <div className={`about ${aboutOpen ? 'open' : ''}`} style={{height: windowHeight}}>
        <div className='about-content'>
          <span className='about-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
          <span className='about-close' onClick={() => setAboutOpen(false)}>Close</span>
        </div>
      </div>

      <div className={`contact ${contactOpen ? 'open' : ''}`} style={{height: windowHeight}}>
        <div className='contact-content'>
          <span className='contact-text'>
            <a href="https://twitter.com/ndoherty_eth" target="_blank" rel="noreferrer">Twitter</a><br />
            <br />
            <a href="https://github.com/ndoherty-eth" target="_blank" rel="noreferrer">Github</a><br />
            <br />
            <a href="mailto:ndoherty.design@gmail.com" target="_blank" rel="noreferrer">Email</a>
          </span>
          <span className='contact-close' onClick={() => setContactOpen(false)}>Close</span>
        </div>
      </div>
    </div>
  )
}


export default Home;