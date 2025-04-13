import React from "react";

const categories = ["All", "Regression", "Classification", "Image"];

const CategoryButtons = ({ onFilter }) => {
  return (
    <div className="category-buttons" style={{width:"1000px",marginLeft:"250px"}}>
      {categories.map((category) => (
        <button key={category} onClick={() => onFilter(category)} style={{backgroundColor:"black"}}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
