import React, {forwardRef} from "react";


const CatPreview = forwardRef(({cat, selectCat}, ref) => (
    <div className="cat-card" onClick={() => selectCat(cat.breed)} ref={ref}>
      <center>
        <img src= {process.env.PUBLIC_URL + "/cat_pictures/" +cat.breed + '.jpg'} alt={cat.breed} />
      </center>

      <div className="caption">
        {cat.breed.replace( /([A-Z])/g, " $1" )}
      </div>
    </div>
))

export default CatPreview;