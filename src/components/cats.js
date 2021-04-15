import React from "react";
import catData from "../cat_metadata.json";
import CatPreview from './catPreview.js';

const CatDisplay = ({sizeFilter}) => (
  <div className="cat-display">
    {
      catData
        .filter((cat) => {
          let result = false;
          if (cat.size != null) {
            for (const size of cat.size) {
              if (sizeFilter[size]) {
                result = true;
              }
            }
          }

          return result;
        })
        .map((cat, i) =>
        <CatPreview cat={cat} key={i} />
      )
    }
  </div>
)

export default CatDisplay;