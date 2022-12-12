import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductItem2 = () => {
  return (
    <div className="hero py-14 lg:w-3/4 lg:mx-auto bg-orange-500">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-2/5">
          <img
            src="https://i.ibb.co/6spbBsP/tourist-service-e88c6-web-app-Nest-Hub-Max-1.png"
            className="max-w-sm rounded-lg shadow-2xl w-full mx-auto"
            alt=""
          />
          <div className="flex lg:w-5/6 mx-auto mt-3">
            <img
              src="https://i.ibb.co/hYWQwZS/tourist-service-e88c6-web-app-Nest-Hub-Max.png"
              className=" w-1/2 mr-3 h-64"
              alt=""
            />
            <img
              src="https://i.ibb.co/6b6JT3j/tourist-service-e88c6-web-app-Nest-Hub-Max-3.png"
              className=" w-1/2 h-64"
              alt=""
            />
          </div>
        </div>
        <div className="w-3/5">
          <h1 className="text-5xl font-bold">TOURIST SERVICES</h1>
          <p className="py-6">
            Technology: React JS, Tailwind CSS, Daisy UI, Node JS, Express JS,
            MongoDB
          </p>
          <ul>
            <li>
              1. A dynamic website with build in admin, seller and buyer role
              authorization system.
            </li>
            <li>
              2. Includes JWT and CURD operation with dedicated database and
              authentication.
            </li>
            <li>
              3. Completely responsive for all smaller, medium and larger
              application.
            </li>
          </ul>
          <Link to="/" className="btn btn-link">
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem2;
