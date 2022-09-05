import React from 'react';
import {
  Routes,
  Route,
  NavLink,
  useParams
} from "react-router-dom";
import './App.css';
import { Home} from './components/Home/Home';
import { About } from './components/About/About';
import { Projects} from './components/Projects/Projects';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact.js';
import { Play } from './components/Play/Play';

function App() {
  let activeStyle = {
    color: "white",
    fontWeight: "bold",
    letterSpacing: "0.4em",
    backgroundColor: "#ffd083",
    borderLeft: "8px solid #ffd083",
    borderTop: "8px solid #F9A834",
    borderRight: "8px solid #bceaf6",
    borderBottom: "8px solid #03919B",
    boxShadow: "#ec506575 4px 4px"
  };

  let activePlayStyle = {
    backgroundColor: "#ec506575",
    padding: "12px",
    letterSpacing: "0.4em",
    fontWeight: "bold",
    marginLeft: "80px",
    animation: "backgroundChange 3s infinite alternate"
  };

  let activeClassName = "NavLinkActive";
  
  // const ProjectPageWrapper = () => {
  //   const {projectId} = useParams();
  // }


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
          <li>
            <NavLink to={"/play"} style={({ isActive }) =>
               isActive ? activePlayStyle: undefined
               }
               className="NavLinkPlay">
              Play
            </NavLink>
          </li>
        </ul>
      </nav>
      </header>
    <main>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/projects/" element={<Projects/>}/>
              {/* <Route path=":projectId" element={<Project/>}/> */}     
        <Route path="/projects/:projectId" element={<Project/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="play" element={<Play/>}/>
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
