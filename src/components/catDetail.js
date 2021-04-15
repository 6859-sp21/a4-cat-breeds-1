import React from "react";

const CatDetail = ({cat, selectCat}) => (
  <div className="popup">
    {!!cat &&
    <div>
      <img src= {process.env.PUBLIC_URL + "/cat_pictures/" +cat.breed + '.jpg'} alt={cat.breed} />
      DETAIL PAGE
      {cat.breed}
    </div>
    }
    <div onClick={() => selectCat("")}>close</div>
  </div>
)

export default CatDetail;