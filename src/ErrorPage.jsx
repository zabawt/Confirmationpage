import React from "react";
import PageCard from "./PageCard";
import PageHeader from "./PageHeader";
import ErrorMark from "./ErrorMark";
import IssueReportMessage from "./IssueReportMessage";

const ErrorPage = props => {
  const { welcome, errorText, errorLink, contactForm } = props;
  return (
    <PageCard>
      <PageHeader success={false}>{welcome}</PageHeader>
      <ErrorMark />
      <p style={{ color: "dimGray" }}>{errorText}</p>
      <IssueReportMessage errorLink={errorLink} contactForm={contactForm} />
    </PageCard>
  );
};

export default ErrorPage;
