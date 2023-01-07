import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div>
        <div className="hero-section">
          <img
          className="hero__image"
          src="./Images/image1.png"
          alt="image 1"
         />
          <p className="hero__content">A flavour for all seasons</p>
        </div>
        <div className="blends__paragraph">
          <p>Our blends</p>
          <p>
            We make our very own Tiny Leaf blends right here in the tea house,
            offering new flavours according to the season. We source all our
            produce sustainably and make sure the hands that laboured for our
            flavour some cups were rewarded fairly.
          </p>
        </div>
        <img className="grass__image" src="./Images/image2.svg" alt="image 2" />
        <h1>Hand-picked and sustainable</h1>
        <img
          className="kettle__image"
          src="./Images/image3.svg"
          alt="image 3"
         />
        <h3>Wise Leaf evenings </h3>
        <p>
          Bringing together those with curious minds, speakers and observers
          alike, our Wise Leaf events are a melting pot to share, reflect and
          contemplate.
        </p>
        <img className="cup__image" src="./Images/image4.svg" alt="image 4" />
        <div className="reservation__section">
          <img
            className="reservation__image"
            src="./Images/image5.png"
            alt="image 5"
          />
          <div className="reservation__content">
            <h1>Make a reservation</h1>
            <p>
              For anything from a catchup with a long lost friend to a book club
              gathering... we’re always ready to put the kettle on.
            </p>
            <button>Reserve a table</button>
          </div>
        </div>
        <h3>Gallery</h3>
        <div className="gallery__images">
          <img
            className="teaPeople__image"
            src="./Images/image6.svg"
            alt="image 6"
           />
          <img
            className="cushion__image"
            src="./Images/cushionimage.png"
            alt="cushion"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
