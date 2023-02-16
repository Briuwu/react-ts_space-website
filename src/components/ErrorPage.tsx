import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <Link to="/home">Go back to home page.</Link>
    </div>
  );
};

export default ErrorPage;
