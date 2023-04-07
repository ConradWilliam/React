import React, { useState, useEffect } from "react";
import "./SCard.css";

function SCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);
    alert("Account created successfully!");
  };

  useEffect(() => {
    setName(localStorage.getItem("name") || "");
    setEmail(localStorage.getItem("email") || "");
    setPhone(localStorage.getItem("phone") || "");
    setPassword(localStorage.getItem("password") || "");
    setConfirmPassword(localStorage.getItem("confirmPassword") || "");
  }, []);

  return (
    <>
      <div className="card-container">
        <div className="signup-card">
          <div className="content">
            <h4>Create your account</h4>

            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="phone"></label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="confirm-password"></label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>

              <button className="submit" type="submit">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SCard;
