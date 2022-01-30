import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './layout/Editor';


function App() {
  return (
    <div className="root-container">
      <div className="main">
        <Editor/>
      </div>
      <div className="left"></div>
      <div className="right"></div>
    </div>
  );
}

export default App;
