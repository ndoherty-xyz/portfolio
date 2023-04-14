import React from 'react'
import { GitHub, Mail, PenTool, Twitter } from 'react-feather';
import { useNavigate } from 'react-router-dom'

import greenwood4 from '../../images/greenwood-4.png'

const GreenwoodPage = () => {
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
                    <PenTool size={14} strokeWidth={2.25} onClick={() => window.open('https://mirror.xyz/ndoherty.eth', '_blank')} />
                </div>
            </div>
        </div>

        <div className='project-content'>
            <div className='project-header'>
                <span className='project-title'>Greenwood Labs</span>
                <span className='project-desc'>Frontend Engineer and Designer, 2022 - 2023</span>
            </div>
        
            <div className='project-content-item'>
                <img className="project-img" src={greenwood4} alt="" />
                <span className='project-content-text'>During my time at Greenwood, I got to design many different types of projects. From DeFi vault protocol interfaces, to a Chrome extension and customer support platform, I designed and built all the interfaces.</span>
            </div>

            <div className='project-content-item'>
                <span className='project-content-text'>I'm lucky to be able to share some of the designs publicly here, with the Figma files embedded. All of the designs you see were also built out using React.</span>
                <iframe title="Greenwood Support Platform" style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} height="500" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FnZZzb7De6komqKlkFkf61A%2FGreenwood-Support-Platform-Designs%3Ft%3D0e4fU6JLFwzNE4JF-1"></iframe>
                <iframe title="Greenwood Extension Landing Page" style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} height="500" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRnVpxzCEwOWIloqBaftIxi%2FUntitled%3Ft%3DKMTLBwOVHqreA4F4-1"></iframe>
            </div>
        </div>
    </div>
    )
}

export default GreenwoodPage;