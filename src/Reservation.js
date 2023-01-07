import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer';

function Reservation() {
  return (
    <div>
      <Header />
      <div>
        <img
          className="spices__image"
          src="./Images/image11.svg"
          alt="spices"
        />
        <h3>Reservation</h3>
      </div>
      <div className="form__container">
        <h3>Book a table</h3>
        <p>
          We take bookings for groups up to 6. We get
          busy on weekends so do book early to avoid
           disappointment.
        </p>
        <form>
          <label for="date">Date</label>
          <br />
          <input type="number" id="date" name="date" />
          <label for="time">Time</label>
          <br />
          <input type="number" id="time" name="time" />
          <label for="group-size">Group size</label>
          <br />
          <input type="number" id="group-size" name="size" />

          <label for="name">Name</label>
          <br />
          <input type="text" id="name" name="name" />

          <label for="contact-number">Contact number</label>
          <br />
          <input type="number" id="contact-number" name="contact" />

          <label for="comments">Comments/requests</label>
          <br />
          <input type="text" id="comments" name="comments" />
          {/* checkmark */}

          <button>Reserve</button>
        </form>
      </div>
      <div className="bottles-image__container">
        <img
          className="bottles__image"
          src="./Images/image12.png"
          alt="bottles"
        />
        <h2>
          No storms in 
          our tea cups
        </h2>
        <p>
          We make our blends with love and care,
           so you can taste aromas from across
           the globe right here in our tea house
        </p>
        <input type="text" placeholder="See what's on the menu" />
      </div>
      <Footer/>
    </div>
  );
}

export default Reservation
