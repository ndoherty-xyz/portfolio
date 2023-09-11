import React, { useState } from 'react';
import { GitHub, Mail, PenTool, Twitter } from 'react-feather';

import './Home.scss';

const Home = () => {
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight)

  window.addEventListener('resize', () => {
    setWindowHeight(window.innerHeight)
  })

  return (
    <div className='home' style={{ height: windowHeight }}>
      <div className='home-top'>
        <div>
          <span>
            I'm Nick
          </span>
          <span>
            Currently a frontend engineer at <a target='_blank' rel="noreferrer" href="https://mirror.xyz">Mirror</a>
          </span>
          <span>
            I also do some freelance web design and development with <a target='_blank' rel="noreferrer" href="https://mirror.xyz">RDD</a>
          </span>
        </div>

        <div>
          <Mail size={18} strokeWidth={2.5} onClick={() => window.open('mailto:ndoherty.xyz@gmail.com', '_blank')} />
          <Twitter size={18} strokeWidth={2.5} onClick={() => window.open('https://twitter.com/ndoherty_xyz', '_blank')} />
          <GitHub size={18} strokeWidth={2.5} onClick={() => window.open('https://github.com/ndoherty-xyz', '_blank')} />
          <PenTool size={18} strokeWidth={2.25} onClick={() => window.open('https://nick.mirror.xyz', '_blank')} />
        </div>
      </div>
    </div >
  )
}


export default Home;