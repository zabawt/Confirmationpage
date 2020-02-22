import React from "react";

const ProductDescription = ({ header, children }) => {
  return (
    <>
      <h3 style={{ color: "midnightblue" }}>{header}:</h3>
      <p style={{ color: "Gainsboro" }}>{children}</p>
    </>
  );
};

export default ProductDescription;
