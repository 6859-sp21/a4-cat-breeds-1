import React from "react";

const CatPreview = ({cat, selectCat}) => (
  <div className="cat-card" onClick={() => selectCat(cat.breed)}>
    <img src= {process.env.PUBLIC_URL + "/cat_pictures/" +cat.breed + '.jpg'} alt={cat.breed} />
    {cat.breed.replace( /([A-Z])/g, " $1" )}
  </div>
)

export default CatPreview;