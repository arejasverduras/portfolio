import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';
import { Project } from './components/Project/Project';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Play } from './components/Play/Play';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home/>}/>
          <Route exact path="projects" element={<Projects/>}/>     
            <Route path="projects/:projectId" element={<Project/>}/>
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
        </Route>
        <Route 
          path="*"
          element={
            <main style={{padding: "1rem"}}>
            <p>There's nothing here!</p>
            </main>
        }/>
      </Routes>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
