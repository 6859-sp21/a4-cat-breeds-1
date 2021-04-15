import React from "react";

const CatPreview = ({cat}) => (
  <div className="cat-card">
    {
      cat.breed
    }
  </div>
)

export default CatPreview;