import React from "react";
import { withRouter } from "react-router-dom";

const Page404 = () => {
  return (
    <img
      className="pageImg"
      src="https://freefrontend.com/assets/img/html-css-404-page-templates/Sad-Mac-404-Error-Page.png"
      alt=""
    />
  );
};

export default withRouter(Page404);
