import catData from "../cat_metadata.json";
import React, {useState, useEffect} from "react";
import BarChart from "./bar.js";
import _ from 'lodash';


const CatPanel = () => {
  let catSizeData = {small: 0, medium: 0, large: 0};
  for (const cat of catData) {
    for (const sizeKey of Object.keys(catSizeData)) {
      if (_.includes(cat.size, sizeKey)) {
        catSizeData[sizeKey] ++;
      }
    }
  }

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
    <div className="cat-panel">

      <BarChart
        data={catSizeData}
        clickFunction={toggleSize}
        currentFilter={sizeFilter}
      />

    </div>
  )
}

export default CatPanel;
