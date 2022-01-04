import React from "react";

import Loader from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={Loader} alt="Loading" />
    </div>
  );
};

export default Spinner;
