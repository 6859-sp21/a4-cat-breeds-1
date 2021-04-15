import './App.css';
import React, {useState} from 'react';
import CatPanel from './components/catPanel.js';
import CatDisplay from "./components/cats";

const App = () => {

  const [sizeFilter, setSizeFilter] = useState({
    small: true,
    medium: true,
    large: true
  });

  const toggleSize = (categoryToggled) => {
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

