import React from "react";
import { ProductList } from "../helper/ProductList";
import ProductItem from "../components/ProductItem";
import "../style/Product.css";

function Product() {
  return (
    <div className="product">
      <h1 className="features">Features</h1>
      <div className="productContent">
        {ProductList.map((productItem, key) => {
          return (
            <ProductItem
              key={key}
              image={productItem.image}
              name={productItem.name}
              price={productItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;
