import React from 'react'
import "./image-grid.css"
import Image3 from "../Images/image3.svg";
import Image4 from "../Images/image4.svg";

const ImageGrid = () => {
  return (
    <div>
      <section className="images__container">
        <div className="green__box"></div>
        <img className="kettle__image" src={Image3} alt="" />

        {/* <img className="wiseLeaf__background" src={Background} alt="" /> */}

        <div className="wiseLeaf__text">
          <h3>Wise Leaf evenings </h3>
          <p>
            Bringing together those with curious minds, speakers and observers
            alike, our Wise Leaf events are a melting pot to share, reflect and
            contemplate.
          </p>
        </div>
        <img className="cup__image" src={Image4} alt="" />
      </section>
    </div>
  );
}

export default ImageGrid
