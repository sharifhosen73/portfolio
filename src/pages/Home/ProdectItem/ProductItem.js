import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductItem = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <a className="mr-2" href="https://clever-licorice-b115f9.netlify.app/">
          <img className="h-64" src="" alt="Shoes" />
        </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title">name</h2>
        <p>This project build by react and uses react component.</p>
        <div className="flex my-3">
          <a
            className="mr-2 text-3xl"
            href="https://clever-licorice-b115f9.netlify.app/"
          >
            <FaExternalLinkAlt />
          </a>
          <a
            className=" text-3xl text-black ml-8"
            href="https://github.com/sharifhosen73/products-resale"
          >
            <FaGithub />
          </a>
        </div>
        <div className="card-actions">
          <Link to="/" className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
