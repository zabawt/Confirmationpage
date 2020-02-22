import React from "react";

const IssueReportMessage = ({ errorLink, contactForm }) => {
  return (
    <p style={{ color: "dimGray" }}>
      {errorLink} <a href="/">{contactForm}</a>
    </p>
  );
};

export default IssueReportMessage;
