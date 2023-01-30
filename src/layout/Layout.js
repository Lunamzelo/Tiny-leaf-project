import Footer from "./Footer";
import Header from "./Header";
import Hero from "../Home/Hero";
import "../layout/footer.css"
import MediaObject from "../Home/MediaObject";
import ImageGrid from "../Home/ImageGrid";
import CallToAction from "../Home/CallToAction";
import Gallery from "../Home/Gallery";

// import Image1 from "../Images/image1.png";


// import Image5 from "../Images/image5.png";


// import Background from "../Images/Background.svg";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div>
        <Hero/>
        <MediaObject/>
        <ImageGrid />
        
        <CallToAction />
       <Gallery/>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
