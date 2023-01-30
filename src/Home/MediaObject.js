import React from 'react'
import Image2 from "../Images/image2.svg";
import "./media-object.css"


const MediaObject = () => {
  return (
    <div>
      <section className="first__grid">
        <div className="blends__paragraph">
          <h3>Our blends</h3>
          <p>
            We make our very own Tiny Leaf blends right here in the tea house,
            offering new flavours according to the season. We source all our
            produce sustainably and make sure the hands that laboured for our
            flavour some cups were rewarded fairly.
          </p>
        </div>

        <img className="grass__image" src={Image2} alt="" />
        <hr className="horizontal__line"></hr>
        <h1>Hand-picked and sustainable</h1>
      </section>
    </div>
  );
}

export default MediaObject
