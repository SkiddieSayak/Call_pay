/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h2>CALL PAY</h2>
            <h1 className="h1-seo">EARN CASH
No points. No coupons. No rewards. Just hard cash.</h1>
            <h3>WE BRING YOU
CALL PAY
MOST EFFECTIVE AND EASIEST WAY TO EARN CASH ON DAILY BASIS</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
