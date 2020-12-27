import React from "react";
import FooterComponent from "../components/FooterComponent";
import VerticalBarComponent from "../components/VerticalBarComponent";
import HeaderComponent from "../components/HeaderComponent";

const PageContentLayout = ({ children }) => {
  return (
    <div id="wrapper">
      <VerticalBarComponent />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <HeaderComponent />
          <div className="container-fluid">{children}</div>
        </div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default PageContentLayout;
