import React from "react";
import Cooperation from "./mains/Cooperation";
import CopyRight from "./mains/CopyRight";
import FooterContainer from "./mains/FooterContainer";

import "./style.scss";

Footer.propTypes = {};

function Footer() {
  return (
    <div className="boxFooter">
      <Cooperation />
      <FooterContainer />
      <CopyRight />
    </div>
  );
}

export default Footer;
