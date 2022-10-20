import React from "react";
import { Link } from "react-router-dom";
import "./notfound.scss";

const NotFound = () => {
  return (
    <div className="error">
      <h1>Page Not Found</h1>
      <Link to="/">
        <button>Go To HomePage</button>
      </Link>
    </div>
  );
};

export default NotFound;
