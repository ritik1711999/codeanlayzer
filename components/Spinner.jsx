import React from "react";

import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "200px auto",
};

function Spinner({ loading }) {
  return (
    <ClipLoader
      color="#ffffff"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
}

export default Spinner;
