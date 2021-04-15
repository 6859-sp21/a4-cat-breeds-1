import './App.css';
import React, {useState} from 'react';
import CatPanel from './components/catPanel.js';
import CatDisplay from "./components/cats";
import size from "d3-selection/src/selection/size";

const App = () => {

  const [sizeFilter, setSizeFilter] = useState({
    small: true,
    medium: true,
    large: true
  });

  const toggleSize = (categoryToggled) => {
    let newSizeFilter;
    if (sizeFilter.small && sizeFilter.medium && sizeFilter.large) {
      newSizeFilter = {
        small: false,
        medium: false,
        large: false
      };
      newSizeFilter[categoryToggled] = true;
    } else {
      newSizeFilter = {...sizeFilter, [categoryToggled]: !sizeFilter[categoryToggled]}
    }

    if (!newSizeFilter.small && !newSizeFilter.medium && !newSizeFilter.large) {
      newSizeFilter = {
        small: true,
        medium: true,
        large: true
      }
    }
    setSizeFilter(newSizeFilter);
  }

  const [sheddingFilter, setSheddingFilter] = useState({
    minimal: true,
    average: true,
    seasonal: true,
    constant: true
  });

  const toggleShedding = (categoryToggled) => {
    let newSheddingFilter;
    if (sheddingFilter.minimal && sheddingFilter.average && sheddingFilter.seasonal && sheddingFilter.constant) {
      newSheddingFilter = {
        minimal: false,
        average: false,
        seasonal: false,
        constant: false
      };
      newSheddingFilter[categoryToggled] = true;
    } else {
      newSheddingFilter = {...sheddingFilter, [categoryToggled]: !sheddingFilter[categoryToggled]}
    }

    if (!newSheddingFilter.minimal && !newSheddingFilter.average && !newSheddingFilter.seasonal && !newSheddingFilter.constant) {
      newSheddingFilter = {
        minimal: true,
        average: true,
        seasonal: true,
        constant: true
      }
    }
    setSheddingFilter(newSheddingFilter);
  }

    return (
      <div className="App">
        <CatPanel toggleSize={toggleSize}
                  sizeFilter={sizeFilter}
                  toggleShedding={toggleShedding}
                  sheddingFilter={sheddingFilter}
        />
        <CatDisplay
          sizeFilter={sizeFilter}
          sheddingFilter={sheddingFilter}
        />
      </div>
    );
}

export default App;

