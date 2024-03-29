import React, { useState } from "react";
import Screen from "./Screen";
import Seats from "./Seats";
import '../styles/TicketsBookingStyle.css';

const theaterName = ["PVR Cinema", "Metro INOX Cinema", "Cinepolis"];
const showTime = ["10:15", "12:45", "3:15", "5:45"];
const theaterSeats = ["0","1","2","3","4","5","6","7","8","9"];

const TicketBooking = (props) => {

  const [date,setDate] = useState(null);
  

  const options = (arr, name) => {
    return arr.map((item, index) => {
      return (
        <option value={index} key={name + index}>
          {item}
        </option>
      );
    });
  };

  const dateOfBooking = (e) => {
    console.log(e.target.value)
    setDate(e.target.value);
  }

  return (
    <div className="book">
      <h3>Book Ticket</h3>
      <p>
        <span className="heading">Movie: </span>
        {props.BookingData.stateUp.detils.title}
      </p>

      <div className="Booking-nav">
        <div className="border-class">
          <select className="select-theater">
            {options(theaterName, "theater")}
          </select>
        </div>
        <div className="border-class">
          <input type="date" onChange={dateOfBooking} />
        </div>
        <div className="border-class">
          <select className="select-theater">
            {options(showTime, "time")}
          </select>
        </div>
      </div>
      <div className="ticket">
        <Screen />
        <div className="seats-section"><Seats BookingDate={date} Seats={theaterSeats} movieName={props.BookingData.stateUp.detils.title} /></div>
      </div>
    </div>
  );
};

export default TicketBooking;
