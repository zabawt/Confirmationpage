import React from "react";

const style = {
  border: "1px solid Gainsboro",
  borderRadius: "6px",
  padding: "12px",
  margin: "24px 12px",
  background: "white"
};

const PageCard = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default PageCard;
