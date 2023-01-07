import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faFacebook,faInstagram,} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <div className="footer">

      <div className="footer__logo">
      <img className="logo" src="./Images/logoImage.svg" alt="logo" />

      <h2>Tiny Leaf Tea House</h2>
</div>
      <p>
        Opening hours <br /> Mon-Sat 11am- 12pm <br />
        Sun 11am-11pm
        <br />
        <br />
        <br />
        Address <br />
        24 Brew lane
        <br />
        BR3 WL Cuptown
        <br />
        <br />
        Contact <br />
        +442019987562 <br />
        hello@yellowmountain.com
      </p>
    

      <p>&copy;2025</p>
    </div>
  );
}

export default Footer;
