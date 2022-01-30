import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import CreateBlog from './views/CreateBlog';
import Details from './views/Details';
import Edit from './views/Edit';
import Home from './views/Home';
import LogReg from './views/LogReg'

function App() {
  return (
    <div className="App">
      <Router>
        <LogReg path="/"/>
        <Home path="/home"/>
        <CreateBlog path="/create" />
        <Edit path="/edit/:id" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
