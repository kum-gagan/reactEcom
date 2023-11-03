import React, { useState } from "react";
import Product from "./Product";
import styled from "styled-components";

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    gap: 10px;
  }

  li {
    a {
      text-decoration: none;
      padding: 5px 10px;
      background-color: rgb(56, 31, 82);
      color: #fff;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: rgb(41, 16, 44);
      }
      &.active {
        background-color: purple;
      }
    }
  }
`;

const ProductList = ({ products, categoryFilter, priceSort }) => {
    const filteredProducts = products.filter((product) => categoryFilter === "" || product.category === categoryFilter)
      .sort((a, b) => (priceSort === "asc" ? a.price - b.price : b.price - a.price));
  
      const [currentPage, setCurrentPage] = useState(1);
      const recordPerPage = 3;
      const lastIndex = currentPage * recordPerPage;
      const firstIndex = lastIndex - recordPerPage;
      const records = filteredProducts.slice(firstIndex,lastIndex);
      const npage = Math.ceil(filteredProducts.length/recordPerPage);
      const numbers = [...Array(npage + 1).keys()].slice(1);

      function prePage(){
        if(currentPage !== 1){
          setCurrentPage(currentPage - 1);
        }
      }
      function changeCPage(id){
        setCurrentPage(id);
      }
      function nextPage(){
        if(currentPage !== npage){
          setCurrentPage(currentPage + 1);
        }
      }

    return (<>
      <ProductListContainer>
        {records.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductListContainer>
      
      <PaginationContainer>
        <ul>
          <li>
            <a href="#" onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((n,i) => (
              <li key={i}>
              <a href="#" className={currentPage === n ? "active" : ""} onClick={()=>changeCPage(n)}> {n} </a>
              </li>
            ))
          }
          <li className="page-items">
            <a href="#" onClick={nextPage}>Next</a>
          </li>
        </ul>
      </PaginationContainer>
      </>
    );
  };
  
  export default ProductList;