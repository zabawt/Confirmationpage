import React from "react";
import SuccessMark from "./SuccessMark";
import PageCard from "./PageCard";

const VIPSuccessPage = props => {
  const { VIPWelcome, successText } = props;
  return (
    <PageCard>
      <SuccessMark />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h2 style={{ color: "gold" }}>{VIPWelcome}</h2>
        <p style={{ color: "gold", fontSize: "1.5em" }}>{successText}</p>
      </div>
    </PageCard>
  );
};

export default VIPSuccessPage;
