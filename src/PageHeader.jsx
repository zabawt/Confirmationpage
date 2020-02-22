import React from "react";

const style = success => {
  return {
    color: `${success ? "midnightblue" : "FireBrick"}`,
    textTransform: "uppercase"
  };
};

const PageHeader = ({ children, success }) => {
  return <h2 style={style(success)}>{children}</h2>;
};

export default PageHeader;
