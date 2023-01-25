import Footer from "./Footer";
import Header from "./Header";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../Images/image1.png";
import Image2 from "../Images/image2.svg";
import Image3 from "../Images/image3.svg";
import Image4 from "../Images/image4.svg";
import Image5 from "../Images/image5.png";
import First from "../Images/firstgallery.svg";
import Second from "../Images/secondgallery.svg";
import Third from "../Images/thirdgallery.svg";
import Fourth from "../Images/fourthgallery.svg";

import Background from "../Images/Background.svg";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div>
        <div className="hero-section">
          {/* <img className="hero__image" src={Image1} alt="hero" /> */}
          <p className="hero__content">A flavour for all seasons</p>
        </div>
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
        <section className="images__container">
          <div className="green__box"></div>
          <img className="kettle__image" src={Image3} alt="" />

          {/* <img className="wiseLeaf__background" src={Background} alt="" /> */}

          <div className="wiseLeaf__text">
            <h3>Wise Leaf evenings </h3>
            <p>
              Bringing together those with curious minds, speakers and observers
              alike, our Wise Leaf events are a melting pot to share, reflect
              and contemplate.
            </p>
          </div>
          <img className="cup__image" src={Image4} alt="" />
        </section>
        <div className="reservation__section">
          <div className="reservation__content">
            <h1>Make a reservation</h1>
            <p>
              For anything from a catchup with a long lost friend to a book club
              gathering... we’re always ready to put the kettle on.
            </p>
            <button>Reserve a table</button>
          </div>
        </div>
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
      <Footer />
    </>
  );
};

export default Layout;
