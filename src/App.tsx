import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import { Project, projects } from './projects';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        { projects.map((project: Project, index: number) => {
          return <Route path={project.slug} element={<ProjectPage project={project} key={`project-route-${index}`}/>} />
        }) }
      </Routes> 
    </BrowserRouter>

  );
}

export default App;
