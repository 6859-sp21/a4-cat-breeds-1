import React from "react";

const CatDetail = ({cat, selectCat}) => (
  <div className="popup" onClick={() => selectCat("")}>
    {!!cat &&
    <div>
      <img src= {process.env.PUBLIC_URL + "/cat_pictures/" +cat.breed + '.jpg'} alt={cat.breed} />
      <div className="cat-info">
        <div className="breed-name">{cat.breed.replace( /([A-Z])/g, " $1" )}</div>
        {
          !!cat["Alternate names"] &&
          <div className="alt-name">Also Called: {cat["Alternate names"].join(', ')} </div>
        }
        <div className="metadata">
          <div className="size">{cat.size.join(' / ')}</div>
          <div className="weight">{cat.weight.join(' to ')} lb</div>
          <div className="shedding">{cat.shedding} shedding</div>
          <div className="grooming">{cat.grooming} grooming</div>
        </div>

        <div className="description">
          {cat.Description.split('\n').map((info, i) => <div key={i}>{info}</div>)}
        </div>
        <div className="history">
          {cat.History.split('\n').map((info, i) => <div key={i}>{info}</div>)}
        </div>
      </div>

      <div className="close-button" onClick={() => selectCat("")}>close</div>
    </div>
    }
  </div>
)

export default CatDetail;