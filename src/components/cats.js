import React, {useState} from "react";
import catData from "../cat_metadata.json";
import CatPreview from './catPreview.js';
import CatDetail from './catDetail.js';
import FlipMove from 'react-flip-move';
// import Popup from 'react-animated-popup';
import {SkyLightStateless} from "react-skylight";


const CatDisplay = (
  {
    sizeFilter,
    sheddingFilter,
    hairFilter,
    temperFilter,
    selectCatMain,
    restartFilter
}) => {

  const [selectedCat, setSelectedCat] = useState("");

  const selectCat = (catName) => {
    setSelectedCat(catName);
    selectCatMain(catName);
  }


  const filteredCats =
    catData
      .filter((cat) => {
        let sizeResult = false;
        let sheddingResult = false;
        let hairResult = false;
        let temperResult = true;

        if (cat.size != null && cat.shedding != null && cat["hair length"] != null) {
          for (const size of cat.size) {
            if (sizeFilter[size]) {
              sizeResult = true;
            }
          }

          for (const shedding of cat.shedding) {
            if (sheddingFilter[shedding]) {
              sheddingResult = true;
            }
          }

          if (cat["hair length"]) {
            for (const hair of cat["hair length"]) {
              if (hairFilter[hair]) {
                hairResult = true;
              }
            }
          }

          let allTemper = true;
          for (const temper of Object.keys(temperFilter)) {
            if (!temperFilter[temper]) {
              allTemper = false;
            }
          }


          if (!allTemper) {
            for (const temper of Object.keys(temperFilter)) {
              if (temperFilter[temper]) {
                let found = false
                for (const catTemper of cat.Temperament) {
                  if (catTemper === temper) {
                    found = true
                  }
                }
                if (!found) {
                  temperResult = false;
                }
              }
            }
          }
        }
        return sizeResult && sheddingResult && hairResult && temperResult;
      })

  return (
    <div className="all-cats">

      <SkyLightStateless className="popup-lib"
                         hideOnOverlayClicked
                         isVisible={selectedCat !== ""}
                         onCloseClicked={() => selectCat("")}
      >
        <CatDetail
          cat={catData.filter((cat) => (cat.breed===selectedCat))[0]}
          selectCat={selectCat}
        />
      </SkyLightStateless>

      <div className="cat-display">
        <FlipMove className="flip-move">
          {
              filteredCats
              .map((cat, i) =>
                <CatPreview cat={cat} selectCat={selectCat} key={cat.breed} />
              )
          }
        </FlipMove>


        <div className="no-more-cats"
             style={{
               visibility: !!filteredCats.length ? "hidden": "visible"
             }}
        >
          <div>
            You have run out of cats!
          </div>
          <div className="restart-filter"
               onClick={restartFilter}
          >
            Restart
          </div>
        </div>
      </div>


  </div>
  )
}

export default CatDisplay;