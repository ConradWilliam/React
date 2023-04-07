import React, { useState } from "react";
import "./RoomReg.css";

function RoomReg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Submitted:",
      name,
      email,
      checkIn,
      checkOut,
      contactNumber,
      message
    );
  };

  return (
    <div className="room-registration-form">
      <h2>Room Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Check-in:
            <input
              type="date"
              value={checkIn}
              onChange={(event) => setCheckIn(event.target.value)}
            />
          </label>
          <label>
            Check-out:
            <input
              type="date"
              value={checkOut}
              onChange={(event) => setCheckOut(event.target.value)}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Contact-Number:
            <input
              type="number"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
            />
          </label>
          <label>
            Message:
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RoomReg;

