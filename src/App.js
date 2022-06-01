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
import { Contact } from './components/Contact/Contact.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <ul>
        <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} activeClassName="active">
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
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>

    </main>
    </div>
  );
}

export default App;
