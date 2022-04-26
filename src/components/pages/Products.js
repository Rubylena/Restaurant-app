import React from "react";
import allProducts from "../data/products_test";
import { Link } from "react-router-dom";

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
                <div className=" d-flex justify-content-between">
                  <h3>{`$ ${product.price}.99`}</h3>

                  <Link
                    className=" btn btn-outline-dark "
                    to={`/products/${product.name}`}
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
