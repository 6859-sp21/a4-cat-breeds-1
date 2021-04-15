import React from "react";
import catData from "../cat_metadata.json";
import CatPreview from './catPreview.js';

const CatDisplay = () => (
  <div className="cat-display">
    {
      catData.map((cat, i) =>
      <CatPreview cat={cat} key={i} />
      )
    }
  </div>
)

export default CatDisplay;