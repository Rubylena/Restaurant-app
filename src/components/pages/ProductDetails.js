import React from "react";
import allProducts from "../data/products_test";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  const data = allProducts.filter(({ name }) => name === params.id);

  return (
    <section className=" container-fluid px-3 py-5">
      {data.map((prod) => (
        <div key={prod.id}>
          <div className="container">
            <div className="row g-3">
              <div
                className=" mycard-img col-12 col-md-6 shadow-lg g-4"
                style={{ backgroundImage: `url(${prod.imageUrl})` }}
              ></div>
              <div className=" col-12 col-md-6 g-4">
                <h1>{prod.name}</h1>
                <p className=" lead text-black-50">{prod.subname}</p>
                <p className=" lead">{prod.description}</p>
                {/* fontawesome icons */}
                <div className=" container">
                  <div className="  text-center  p-3 ">
                    <i class="fa-solid fa-clock p-2 ">
                      {`  Total Time: ${prod.time} m`}{" "}
                    </i>
                    <i class="fa-solid fa-fire-flame-curved p-2">{`  Calories: ${prod.calories}`}</i>
                    <p className=" p-2 lead">{`Price: $ ${prod.price}.99`}</p>
                  </div>
                </div>
                {/* buttons */}
                <div className="d-flex justify-content-around p-3">
                  <button className=" btn btn-outline-dark ">Bookmark</button>
                  <button className=" btn btn-outline-dark ">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductDetails;