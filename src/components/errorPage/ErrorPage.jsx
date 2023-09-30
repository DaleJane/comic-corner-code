import React from "react";
import "./errorPage.scss";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-div">
      <h1>ERROR! PAGE NOT FOUND</h1>
      <div>
        <Link to="/">
          <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
