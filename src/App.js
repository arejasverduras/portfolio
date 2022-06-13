import React from 'react';
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import { Home} from './components/Home/Home';
import { About } from './components/About/About';
import { Projects} from './components/Projects/Projects';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact.js';

function App() {
  let activeStyle = {
    color: "rgb(94, 231, 255)",
    backgroundColor: "black",
    borderRight: "4px solid rgb(94, 231, 255)",
    borderBottom: "4px solid rgb(94, 231, 255)"
  };

  let activeClassName = "NavLinkActive";
  
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <ul>
        <li>
            <NavLink to="/" 
              style={({ isActive }) =>
               isActive ? activeStyle: undefined
               }
               className="NavLink"
               >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={({ isActive }) =>
               isActive ? activeStyle: undefined
               }
               className="NavLink">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} style={({ isActive }) =>
               isActive ? activeStyle: undefined
               }
               className="NavLink">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} style={({ isActive }) =>
               isActive ? activeStyle: undefined
               }
               className="NavLink">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      </header>
    <main>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
              {/* <Route path=":projectId" element={<Project/>}/> */}     
        <Route path="/projects/:projectId" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route 
          path="*"
          element={
            <main style={{padding: "1rem"}}>
            <p>There's nothing here!</p>
            </main>
        }/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
