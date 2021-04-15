import React, {forwardRef} from "react";


const CatPreview = forwardRef(({cat, selectCat}, ref) => (
    <div className="cat-card" onClick={() => selectCat(cat.breed)} ref={ref}>
      <img src= {process.env.PUBLIC_URL + "/cat_pictures/" +cat.breed + '.jpg'} alt={cat.breed} />
      {cat.breed.replace( /([A-Z])/g, " $1" )}
    </div>
))

export default CatPreview;