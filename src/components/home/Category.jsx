import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

export const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="category-container">
     <div className="categories">
     <div className="category-title">Kategoriler</div>
      {categories?.map((category, index) => (
        <div onClick={()=>setCategory(category.id)} key={index} className="category-item">
          {category.name}
        </div>
      ))}
     </div>
    </div>
  );
};
