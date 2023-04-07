import React from "react";
import "./SCard.css";

function SCard() {
  return (
    <>
      <div className="card-container">
        <div className="signup-card">
          <div className="content">
            <h4>Create your account</h4>

            <form>
              <div class="input-wrapper">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" />
              </div>

              <div class="input-wrapper">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>

              <button className="submit" type="submit">
                Login
              </button>
            </form>
            <div className="Down">
              <span>
                <input type="checkbox" id="choice" className="choice" />
                <label htmlFor="choice">
                  I don't want to receive marketing communications.
                </label>
              </span>
              <p className="account">
                Already have an account? <a href="/Login">Log In</a>
              </p>
              <p className="terms">
                *By creating an account you agree to our Terms of Service and
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SCard;
