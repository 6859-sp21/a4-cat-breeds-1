import './App.css';
import React, {useState} from 'react';
import CatPanel from './components/catPanel.js';
import CatDisplay from "./components/cats";

const App = () => {

  const [selectedCat, setSelectedCat] = useState("");

  const selectCatMain = (catName) => {
    setSelectedCat(catName);
  }


  const [temperFilter, setTemperFilter] = useState({
    "affectionate" : true,
    "active": true,
    "intelligent": true,
    "loyal": true,
    "social": true,
    "docile": true,
    "gentle": true,
    "playful": true,
    "sweet": true,
    "strong": true,
    "outgoing" : true,
    "independent": true
  });


  const toggleTemper = (categoryToggled) => {
    if (categoryToggled === "all") {
      setTemperFilter({
        "affectionate" : true,
        "active": true,
        "intelligent": true,
        "loyal": true,
        "social": true,
        "docile": true,
        "gentle": true,
        "playful": true,
        "sweet": true,
        "strong": true,
        "outgoing" : true,
        "independent": true
      })
      return;
    }


    let newTemperFilter;

    let allTrue = true;
    let allFalse = true;
    for(const key of Object.keys(temperFilter)) {
      if (temperFilter[key]) {
        allFalse = false;
      } else {
        allTrue = false;
      }
    }

    if (allTrue) {
      newTemperFilter = {
        "affectionate" : false,
        "active": false,
        "intelligent": false,
        "loyal": false,
        "social": false,
        "docile": false,
        "gentle": false,
        "playful": false,
        "sweet": false,
        "strong": false,
        "outgoing" : false,
        "independent": false
      };
      newTemperFilter[categoryToggled] = true;
    } else {
      newTemperFilter = {...temperFilter, [categoryToggled]: !temperFilter[categoryToggled]}
    }

    if (allFalse) {
      newTemperFilter = {
        "affectionate" : true,
        "active": true,
        "intelligent": true,
        "loyal": true,
        "social": true,
        "docile": true,
        "gentle": true,
        "playful": true,
        "sweet": true,
        "strong": true,
        "outgoing" : true,
        "independent": true
      }
    }
    setTemperFilter(newTemperFilter);
    console.log(newTemperFilter);
  }


  const [sizeFilter, setSizeFilter] = useState({
    small: true,
    medium: true,
    large: true
  });

  const toggleSize = (categoryToggled) => {
    if (categoryToggled === "all") {
      setSizeFilter({
        small: true,
        medium: true,
        large: true
      });
      return;
    }
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
    if (categoryToggled === "all") {
      setSheddingFilter({
        minimal: true,
        average: true,
        seasonal: true,
        constant: true
      });
      return;
    }

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


  const [hairFilter, setHairFilter] = useState({
    short: true,
    medium: true,
    long: true
  });

  const toggleHair = (categoryToggled) => {
    if (categoryToggled === "all") {
      setHairFilter({
        short: true,
        medium: true,
        long: true
      });
      return;
    }

    let newHairFilter;
    if (hairFilter.short && hairFilter.medium && hairFilter.long) {
      newHairFilter = {
        short: false,
        medium: false,
        long: false
      };
      newHairFilter[categoryToggled] = true;
    } else {
      newHairFilter = {...hairFilter, [categoryToggled]: !hairFilter[categoryToggled]}
    }

    if (!newHairFilter.short && !newHairFilter.medium && !newHairFilter.long) {
      newHairFilter = {
        short: true,
        medium: true,
        long: true
      }
    }
    setHairFilter(newHairFilter);
  }


  const restartFilter = () => {
    toggleSize("all")
    toggleHair("all")
    toggleShedding("all")
    toggleTemper("all")
  }

    return (
      <div className="App">
        <CatPanel toggleSize={toggleSize}
                  sizeFilter={sizeFilter}
                  toggleShedding={toggleShedding}
                  sheddingFilter={sheddingFilter}
                  toggleHair={toggleHair}
                  hairFilter={hairFilter}
                  toggleTemper = {toggleTemper}
                  temperFilter = {temperFilter}
                  selectedCat = {selectedCat}

        />
        <CatDisplay
          sizeFilter={sizeFilter}
          sheddingFilter={sheddingFilter}
          hairFilter={hairFilter}
          temperFilter={temperFilter}
          selectCatMain={selectCatMain}
          restartFilter={restartFilter}
        />
      </div>
    );
}

export default App;

