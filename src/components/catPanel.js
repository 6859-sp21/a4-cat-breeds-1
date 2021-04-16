import catData from "../cat_metadata.json";
import React, {useState, useEffect} from "react";
import BarChart from "./bar.js";
import _ from 'lodash';

const Title = () => (
  <div className="title">
    <div className="catology">
      <span className="cat">Cat</span>
      <span className="ology">ology</span>
    </div>
    <div className="description">
      Catology is what anyone who owns a cat is doomed to practice for
      the rest of their pet's natual life. Little do most cat owners realize
      that they are being pulled into this dangerous cult of cats.
    </div>
  </div>
)

const CatPanel = (
  {
    toggleSize,
    sizeFilter,
    toggleShedding,
    sheddingFilter,
    toggleHair,
    hairFilter
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

  let catHairData = {short: 0, medium: 0, long: 0};
  for (const cat of catData) {
    for (const key of Object.keys(catHairData)) {
      if (_.includes(cat["hair length"], key)) {
        catHairData[key] ++;
      }
    }
  }

      return (
    <div className="cat-panel">
      <Title />
      <BarChart
        data={catSizeData}
        clickFunction={toggleSize}
        currentFilter={sizeFilter}
        title="Size"
      />
      <BarChart
        data={catHairData}
        clickFunction={toggleHair}
        currentFilter={hairFilter}
        title = "Hair Length"
      />
      <BarChart
        data={catSheddingData}
        clickFunction={toggleShedding}
        currentFilter={sheddingFilter}
        title = "Shedding"
      />
    </div>
  )
}

export default CatPanel;
