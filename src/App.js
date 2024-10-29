import React, { useState } from "react";
import styled from "styled-components";
import products from "./products";
import ProductList from "./components/ProductList";

const AppContainer = styled.div`
  text-align: center;
  padding: 30px;
  font-family: 'Work Sans', sans-serif;
`;
const Heading = styled.h1`
   margin: 10px;
`;
const SortButton = styled.button`
  margin-bottom: 10px;
  outline: none;
  height: 50px;
  padding: 0 10px;
  background-color:rgb(56, 31, 82);
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    background-color: rgb(41, 16, 66);
  }
`;
const FilterSelect = styled.select`
  outline: none;
  height: 50px;
  text-align: center;
  font-weight: bold;
  padding: 0 5px;
  margin-left:5px;
  background-color: rgb(56, 31, 82);
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    background-color: rgb(41, 16, 66);
  }
`;

const App = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceSort, setPriceSort] = useState("asc");

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const handlePriceSortChange = () => {
    setPriceSort(priceSort === "asc" ? "desc" : "asc");
  };

  return (
    <AppContainer>
      <Heading>Product List</Heading>
      <SortButton onClick={handlePriceSortChange}>
         Filter ({priceSort === "asc" ? "Low to High" : "High to Low"})
      </SortButton>
      <FilterSelect onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Iphone">Iphone</option>
        <option value="Oneplus">Oneplus</option>
        <option value="Samsung">Samsung</option>
      </FilterSelect>
      <ProductList products={products} categoryFilter={categoryFilter} priceSort={priceSort} />
    </AppContainer>
  );
};

export default App;
