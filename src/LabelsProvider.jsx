import React from 'react';
import loggedin from "./translations/loggedin";
import anonymous from "./translations/anonymous";

const LabelProvider = ({ lang, userData, userLoggedIn, children }) => {
  const data = userLoggedIn ? loggedin(userData) : anonymous;
  return <>{children(data[lang])}</>;
};

export default LabelProvider;