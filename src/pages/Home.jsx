import React,{useState} from "react";
import { SliderCompanies } from "../components/home/SliderCompanies";
import { Sorting } from "../components/home/Sorting";
import { Category } from "../components/home/Category";
import { Products } from "../components/home/Products";

export const Home = () => {
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

   
  
  return (
    <div>
      <SliderCompanies />
      <Sorting setSort={setSort} />

      <div className="home-div">
        <div className="category">
          <Category setCategory={setCategory} />
        </div>

        <div className="products">
          <Products category={category} sort={sort}/>
        </div>
      </div>
    </div>
  );
};
