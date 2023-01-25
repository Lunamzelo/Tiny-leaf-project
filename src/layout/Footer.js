import React from "react";
import Logo from "../Images/logoImage.svg";
import LogoText from "../Images/Tiny Leaf Tea House.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__flex">
        <div className="footer__logo">
          <img className="logo" src={Logo} alt="" />

          <img className="footer__logoText" src={LogoText} alt="text" />
        </div>
        <div className="contact__details">
          <div className="opening">
            <h5>Opening hours </h5>
            <p>
              Mon-Sat 11am- 12pm <br />
              Sun 11am-11pm
            </p>
          </div>
          <div className="address">
            <h5>Address </h5>
            <p>
              24 Brew lane
              <br />
              BR3 WL Cuptown
            </p>
          </div>
          <div className="contact">
            <h5>Contact</h5>
            <p>
              +442019987562 <br />
              hello@yellowmountain.com
            </p>
          </div>
        </div>
      </div>

      <p className="copy__right">&copy;2025</p>
    </div>
  );
}

export default Footer;
