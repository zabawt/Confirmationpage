import React from "react";

const style = {
  background: "dodgerBlue",
  color: "white",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  display: "block",
  maxWidth: "200px",
  margin: "auto"
};

const LoginButton = ({ children }) => {
  return (
    <div>
      <a href="/" style={style}>
        {children}
      </a>
    </div>
  );
};

export default LoginButton;
