import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import { Project, projects } from './projects';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import GreenwoodPage from './pages/Greenwood/GreenwoodPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        { projects.map((project: Project, index: number) => {
          return (
            <Route 
              path={project.slug} 
              element={
                project.slug === 'greenwood-labs' 
                  ? <GreenwoodPage /> 
                  : <ProjectPage project={project} key={`project-route-${index}`}/>
              } 
            />
          )
        })}
      </Routes> 
    </BrowserRouter>

  );
}

export default App;
