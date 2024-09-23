import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import './App.css'
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import WebsiteProject from './components/WebsiteProject'
import About from './components/About'
import Resume from './components/Resume'
import MinecraftProject from './components/MinecraftProject';
import UnrealProject from './components/UnrealProject';
import AndroidProject from './components/AndroidProject';
import ScrollToTop from './ScrollToTop';

function App(){
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-10">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<Projects/>} />
        <Route path="/projects/website-project" element={<WebsiteProject/>} />
        <Route path="/projects/minecraft-project" element={<MinecraftProject/>} />
        <Route path="/projects/unreal-project" element={<UnrealProject/>} />
        <Route path="/projects/android-project" element={<AndroidProject/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      </div>
      </div>
      </div>
    </>
    );
}

export default App;