import React, {useState} from "react";
import catData from "../cat_metadata.json";
import CatPreview from './catPreview.js';
import CatDetail from './catDetail.js';
import FlipMove from 'react-flip-move';


const CatDisplay = ({sizeFilter}) => {

  const [selectedCat, setSelectedCat] = useState("");

  const selectCat = (catName) => {
    console.log(catName + " selected");
    setSelectedCat(catName);
  }

  return (
    <div className="all-cats">
      <div className="cat-details" style={{visibility: selectedCat !== "" ? "visible" : "hidden"}}>
        <CatDetail
          cat={catData.filter((cat) => (cat.breed===selectedCat))[0]}
          selectCat={selectCat}
        />
      </div>
      <div className="cat-display">
        <FlipMove className="flip-move">
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
                <CatPreview cat={cat} selectCat={selectCat} key={cat.breed} />
              )
          }
        </FlipMove>
      </div>
  </div>
  )
}

export default CatDisplay;