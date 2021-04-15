import catData from "../cat_metadata.json";
import React, {useState, useEffect} from "react";
import BarChart from "./bar.js";
import _ from 'lodash';


const CatPanel = (
  {
    toggleSize,
    sizeFilter,
    toggleShedding,
    sheddingFilter
  }) => {
  let catSizeData = {small: 0, medium: 0, large: 0};
  for (const cat of catData) {
    for (const sizeKey of Object.keys(catSizeData)) {
      if (_.includes(cat.size, sizeKey)) {
        catSizeData[sizeKey]++;
      }
    }
  }

    let catSheddingData = {minimal: 0, average: 0, seasonal: 0, constant: 0};
    for (const cat of catData) {
      for (const key of Object.keys(catSheddingData)) {
        if (_.includes(cat.shedding, key)) {
          catSheddingData[key] ++;
        }
      }
    }

      return (
    <div className="cat-panel">
      <BarChart
        data={catSizeData}
        clickFunction={toggleSize}
        currentFilter={sizeFilter}
      />
      <BarChart
        data={catSheddingData}
        clickFunction={toggleShedding}
        currentFilter={sheddingFilter}
      />
    </div>
  )
}

export default CatPanel;
