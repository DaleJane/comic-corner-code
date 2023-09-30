import React from "react";
import "./smallheader.scss";
import { Link } from "react-router-dom";

export default function SmallHeader() {
  const showMessage = () => {
    alert("This is fictional e-mail");
  };

  return (
    <header className="black-header">
      <div className="info d-sm-none d-lg-flex">
        <div className="no-click">Reader's club</div>
        <div className="line"></div>
        <div className="no-click">0118956325</div>
        <div className="line"></div>
        <div className="black-header-link">
          <Link to="/" onClick={showMessage}>
            readersclub@bmail.com
          </Link>{" "}
        </div>
      </div>
      <div className="info-detail d-sm-none d-lg-flex">
        <div className="social-networks">
          <a href="https://www.facebook.com/veselicetvrtak/" target="blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/veseli_cetvrtak" target="blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/veselicetvrtak/" target="blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCLbPOALkVcCblkTJsWW7YVg"
            target="blank"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="line d-lg-block"></div>
        <div className="impresum d-sm-none d-lg-block">
          <Link to="/impresum">IMPRESUM</Link>{" "}
        </div>
      </div>
      {/* bOOTSRAP */}
      <div className="d-sm-flex d-lg-none mobile-new-holder">
        <div className="mobile-social-networks d-sm-flex">
          <a href="https://www.facebook.com/veselicetvrtak/" target="blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/veseli_cetvrtak" target="blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/veselicetvrtak/" target="blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCLbPOALkVcCblkTJsWW7YVg"
            target="blank"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <div className="d-sm-flex club">
            <div className="line d-lg-block"></div>
            <div className="no-click d-sm-block d-lg-none">
              <strong>Reader's club:</strong> 0118956325
            </div>
          </div>
        </div>

        <div className="d-sm-flex message">
          <div className="line"></div>
          <div className="mail">
            <Link to="/" onClick={showMessage}>
              <i className="fa-regular fa-envelope"></i>
            </Link>
          </div>
        </div>
      </div>{" "}
      {/* bOOTSRAP */}
    </header>
  );
}
