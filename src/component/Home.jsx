import React from "react";

const Home = () => {
  return (
    <div className="Hero">
      <div className="card bg-dark text-white border-0">
        <img src="assets/back.jpg" className="card-img" alt="..." height="400px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">New Offer for You</h5>
            <p className="card-text lead fs-2">
              Checkout All the New Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
