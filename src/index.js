import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const props = {
  siteLang: "DE",
  userData: {
    name: "Corey",
    lastName: "Taylor"
  },
  loggedIn: true,
  product: "starter"
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App {...props} />, rootElement);
