import React from "react";
import ProductDescription from "./ProductDescription";
import LoginButton from "./LoginButton";
import SuccessMark from "./SuccessMark";
import PageCard from "./PageCard";
import PageHeader from "./PageHeader";
import ProfessionalDescList from './ProfessionalDescList'

const SuccessPage = props => {

  const {
    welcome,
    productDescription,
    productName,
    loginText,
    successText,
    professionalList
  } = props;

  const productListComponents = {
    professional: ProfessionalDescList,
    starter: ()=>null,
  }

  const ProductList = productListComponents[productName];

  return (
    <PageCard>
      <PageHeader success={true}>{welcome}</PageHeader>
      <SuccessMark />
      <p style={{ color: "dimGray" }}>{successText}</p>
      {props[productName] && (
        <ProductDescription header={productDescription}>
          {props[productName]}
        </ProductDescription>
      )}
      <ProductList professionalList={professionalList}/>
      {!props.userLoggedIn && <LoginButton>{loginText}</LoginButton>}
    </PageCard>
  );
};

export default SuccessPage;
