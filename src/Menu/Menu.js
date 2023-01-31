import React from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

import "./menu.css";

function Menu() {
  return (
    <div>
      <Header />
      {/* <div className="banner"></div> */}
      <div className="image__container">
        <h1>Menu</h1>
      </div>
      <div className="menu__container">
      <h3>Loose leaf teas</h3>
      <div className="price__menu">
        <h4>Darjeeling</h4>
        <div className="menu_item">
          <p>
            A refined and ligh Black tea from the region the Tibetans call
            “country of storms” after the thick mist that rests on the
            plantations
          </p>
          <p>£4.50</p>
        </div>
      </div>
      <div>
        <h4>Blue Earl Grey</h4>
        <div className="menu_item">
          <p>
            A delicate blend of blueberry flower and sunflower petals with Earl
            Grey aromas
          </p>
          <p>£4.50</p>
        </div>
      </div>
      <div>
        <h4>Organic Mango and Papaya</h4>
        <div className="menu_item">
          <p>
            A mix of Indian Black tea, Ceylan, Assam and Chinese Green tea,
            along with dried mango and papaya for a sweet exotic flavour
          </p>
          <p>£5</p>
        </div>
      </div>
      <div>
        <h4>White Magic</h4>
        <div className="menu_item">
          <p>
            White tea sprinkled with rose buttons and marigold, with aromas of
            passion fruit, peach and apricot
          </p>
          <p>£5</p>
        </div>
      </div>
      <div>
        <h4>Wise Flower</h4>
        <div className="menu_item">
          <p>
            An unusual blend of rose, Sencha Green tea, dates and gooseberry
            petals. Refreshing and seasonal.
          </p>
          <p>£5</p>
        </div>
      </div>
      <div>
        <h4>Night at the palace</h4>
        <div className="menu_item">
          <p>
            Earl Grey aromas, kiwi, yellow peach, orange blossom and violet make
            this one of our most exquisite blends
          </p>
          <p>£5.50</p>
        </div>
      </div>
      <div className="specials">
        <h3>Special This Week ...</h3>
        <div>
          <h4>Sticky Almond</h4>
          <div className="menu_item">
            <p>
              Organic Sencha Green tea from China, mixed with apple, cinnamon,
              ginger and vanilla
            </p>
            <p>£5.50</p>
          </div>
        </div>
        <div>
          <h4>Green Sun</h4>
          <div className="menu_item">
            <p>
              Blood orange and orange bark make this a fruity and delightfully
              sour tea
            </p>
            <p>£5.50</p>
          </div>
        </div>
        <div>
          <h4>Christmas Special</h4>
          <div className="menu_item">
            <p>
              Organic Assam Black tea with cinnamon, caradamon and pineapple
            </p>
            <p>£6</p>
          </div>
        </div>
      </div>
      </div>
      <div className="reserve__box">
        {/* <img className="lemon" src="./Images/image10.svg" alt="lemon pieces" /> */}
        <h1>Shall we put your name in the tea pot?</h1>
        <p>
          For anything from a catchup with a long lost friend to a book club
          gathering... we’re always ready to put the kettle on.
        </p>
        <input type="text" placeholder="Reserve a table" />
      </div>

      <Footer />
    </div>
  );
}

export default Menu;
