import './App.css';
import React, {Component} from 'react';
import catData from './cat_metadata.json';
import CatPanel from './components/catPanel.js';
import CatDisplay from "./components/cats";

function App() {
    return (
      <div className="App">
        <CatPanel />
        <CatDisplay />
      </div>
    );
}

export default App;

