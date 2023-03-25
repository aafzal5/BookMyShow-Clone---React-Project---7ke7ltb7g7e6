import React from "react";
import { NavLink } from "react-router-dom";
import Payment from "./Payment";
import Summary from "./Summary";

const Checkout = () => {
  const ticketDetails = JSON.parse(sessionStorage.getItem("BookingDetails"));
  return (
    <div className="check-out">
      <NavLink to="/">
        <button className="checkout-back-button">Back</button>
      </NavLink>
      <h1 className="checkout-heading">Checkout</h1>
      <div className="wraper-checkout">
        <Summary BookingDetails={ticketDetails} />
        <Payment />
      </div>
    </div>
  );
};

export default Checkout;
