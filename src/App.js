import './App.css';
import React, {Component, useState} from 'react';
import catData from './cat_metadata.json';
import CatPanel from './components/catPanel.js';
import CatDisplay from "./components/cats";

const App = () => {

  const [sizeFilter, setSizeFilter] = useState({
    small: true,
    medium: true,
    large: true
  });

  const toggleSize = (categoryToggled) => {
    console.log("toggle size " + categoryToggled + " to " + !sizeFilter[categoryToggled]);
    setSizeFilter({...sizeFilter, [categoryToggled]: !sizeFilter[categoryToggled]})
  }

    return (
      <div className="App">
        <CatPanel toggleSize={toggleSize} sizeFilter={sizeFilter}/>
        <CatDisplay sizeFilter={sizeFilter}/>
      </div>
    );
}

export default App;

