import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  border-radius: 10px;
  margin: 10px auto;
  padding: 5px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 9px 15px -3px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 260px;
  height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

`;

const Product = ({ product }) => {
  const { title, description, price, image } = product;

  return (
    <ProductContainer>
      <ProductImage src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>₹{price}</p>
    </ProductContainer>
  );
};

export default Product;
