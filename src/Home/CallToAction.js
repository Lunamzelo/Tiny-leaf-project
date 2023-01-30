import React from 'react'
import "./call-to-action.css"

const CallToAction = () => {
  return (
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
  );
}

export default CallToAction
