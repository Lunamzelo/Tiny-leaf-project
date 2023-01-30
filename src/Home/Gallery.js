import React from 'react'
import { Carousel } from "react-responsive-carousel";
import First from "../Images/firstgallery.svg";
import Second from "../Images/secondgallery.svg";
import Third from "../Images/thirdgallery.svg";
import Fourth from "../Images/fourthgallery.svg";

const Gallery = () => {
  return (
    <div>
      <h3 className="gallery">Gallery</h3>
      <Carousel>
        <div className="gallery__images">
          <img className="first__gallery" src={First} alt="" />
          <img className="second__gallery" src={Second} alt="" />
          <img className="third__gallery" src={Third} alt="" />
          <img className="fourth__gallery" src={Fourth} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery
