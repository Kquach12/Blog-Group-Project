import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import CreateBlog from './views/CreateBlog';
import Details from './views/Details';
import Edit from './views/Edit';
import Home from './views/Home';
import LogReg from './views/LogReg'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App container">
      <Router>
        <LogReg path="/"/>
        <Home path="/home"/>
        <CreateBlog path="/create" />
        <Edit path="/edit/:id" />
        <Details path="/details/:id" />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
