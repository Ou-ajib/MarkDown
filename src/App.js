import React from 'react';
import './App.css';
import Markdown from './components/Markdown.js';
import 'bootstrap/dist/css/bootstrap.css';
import Titre from './components/Titre';

function App() {
  return (
    <div className="App">

      <div className="container">
        <Titre />
      </div>
      <br/>
      <div className="container">
        <Markdown />
      </div>
      
    </div>
  );
}

export default App;
