import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import footerLogo from "../../assets/footer/veselibeli.png";

function Footer() {
  return (
    <footer>
      <div id="footer">
        <div className="footer-content">
          <div
            className="footer-logo"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "instant" })
            }
          >
            <Link to="/">
              <img src={footerLogo} alt="vs logo" />
            </Link>
          </div>

          <div className="footer-icons">
            <a
              className="footer-link-fb footer-link"
              href="https://www.facebook.com/veselicetvrtak/"
              target="blank"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              className="footer-link-tw footer-link"
              href="https://twitter.com/veseli_cetvrtak"
              target="blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              className="footer-link-in footer-link"
              href="https://www.instagram.com/veselicetvrtak/"
              target="blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              className="footer-link-yt footer-link"
              href="https://www.youtube.com/channel/UCLbPOALkVcCblkTJsWW7YVg"
              target="blank"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
