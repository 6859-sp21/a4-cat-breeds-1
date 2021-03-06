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
  const [showSource, setShowSource] = useState(false);

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

        <div className="source-button"
             onClick={() => setShowSource(!showSource)}
             style={
               {visibility: (filteredCats.length!==0) ? "visible" :"hidden"}
             }
        >
          Show Sources
        </div>
        <div className="source"
             style={
               {visibility: (showSource && filteredCats.length!==0) ? "visible" :"hidden"}
             }
        >

          <div
          >
            <div className="source-title">
              Data Source
            </div>

            <div>
              Wolfram Alpha API
            </div>
          </div>
          <div>
            <div className="source-title">
              Site Name
            </div>
            <div>
              James Grady
            </div>
          </div>
          <div>
            <div className="source-title">
              Picture Source
            </div>
            <div>
              <div>
                vetstreet.com
              </div>
              <div>
                cat-breeds-encyclopedia.com
              </div>
              <div>
                cattime.com
              </div>
              <div>
                pets4homes.com
              </div>
              <div>
                omlet.co.uk
              </div>
              <div>
                petguide.com
              </div>
              <div>
                burmilla.us
              </div>
              <div>
                catbreedselector.com
              </div>
              <div>
                petpaw.com.au
              </div>
              <div>
                my-pet-shop-ds.wikia.com
              </div>
              <div>
                purina.com
              </div>
              <div>
                purrfectcatbreeds.com
              </div>
              <div>
                gccfcats.org
              </div>
              <div>
                cat-breed-info.com
              </div>
              <div>
                localkittensforsale.com
              </div>
            </div>

          </div>
        </div>
      </div>


  </div>
  )
}

export default CatDisplay;