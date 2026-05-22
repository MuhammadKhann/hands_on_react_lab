import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProjectsPage from './projects/ProjectPage';

function App() {
   return (
   <div className="container">
      <ProjectsPage />
   </div>
   );
}


export default App
