import React from "react";
import { Link } from "react-router-dom";

// MUI Stuff
import Button from "@material-ui/core/Button";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Oops! Page not found.</h1>
      <Button variant="contained" color="primary" component={Link} to="/">
        Back to Home
      </Button>
    </div>
  );
};

export default PageNotFound;
