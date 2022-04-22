import React from "react";
import allProducts from "../data/products_test";

const Products = () => {
  return (
    <section className=" container-fluid py-5 px-3">
      <h1> All Products</h1>
      <div className="row g-3">
        {allProducts.map((product) => (
          <div
            key={product.id.toString()}
            className="col-12  col-md-6 col-lg-4 col-xl-3 g-4"
          >
            <div className="card shadow-lg border-1">
              <img
                src={product.imageUrl}
                className=" card-img-top "
                alt={product.name}
              />
              <div className=" card-body">
                <h2>{product.name}</h2>
                <h3>{`$ ${product.price}`}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
