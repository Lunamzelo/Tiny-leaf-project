import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./reservation.css";
//import Image11 from "../Images/image11.svg"
import Image12 from "../Images/image12.png";
import Ellipse41 from "../Images/Ellipse 4 (1).svg"

function Reservation() {
  return (
    <div>
      <Header />
      <div className="reservationImage__container">
        {/* <img
          className="spices__image"
          src={Image11}
          alt="spices"
        /> */}
        <h3>Reservation</h3>
      </div>
      <img className="ellipse__1" src={Ellipse41} alt=""/>
      <div className="form__container">
        <h3>Book a table</h3>
        <p>
          We take bookings for groups up to 6. We get busy on weekends so do
          book early to avoid disappointment.
        </p>
        <form>
          <div className="input__boxes">
            <div className="date">
              <label for="date">Date</label>

              <input type="number" id="date" name="date" />
            </div>
            <div className="time">
              <label for="time">Time</label>

              <input type="number" id="time" name="time" />
            </div>
            <div className="group-size">
              <label for="group-size">Group size</label>

              <input type="number" id="group-size" name="size" />
            </div>
            <div className="name">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="contact-number">
              <label for="contact-number">Contact number</label>

              <input type="number" id="contact-number" name="contact" />
            </div>
            <div className="comments">
              <label for="comments">Comments/requests</label>

              <input type="text" id="comments" name="comments" />
            </div>
          </div>
          {/* checkmark */}

          <button>Reserve</button>
        </form>
      </div>
      <div className="bottles-image__container">
        <img className="bottles__image" src={Image12} alt="bottles" />
        <h2>No storms in our tea cups</h2>
        <p>
          We make our blends with love and care, so you can taste aromas from
          across the globe right here in our tea house
        </p>
        <input type="text" placeholder="See what's on the menu" />
      </div>
      <Footer />
    </div>
  );
}

export default Reservation;
