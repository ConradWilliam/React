import React from "react";
import "./SCard.css";

function SCard() {
  return (
    <>
      <div className="card-container">
        <div className="signup-card">
          <div className="content">
            <h4>Create your account</h4>

            <div className="button-container">
              <button className="Google">
                <div className="icon1">
                  <i class="fa-brands fa-google"></i>
                </div>
                Sign Up With Google
              </button>

              <button className="Fb">
                <div className="icon">
                  <i class="fa-brands fa-facebook"></i>
                </div>
                Sign Up With Facebook
              </button>
            </div>

            <p className="or">or</p>

            <div className="button-container">
              <button className="Email">
                <div className="icon">
                  <i class="fa-regular fa-envelope"></i>
                </div>
                Sign Up With Email
              </button>
            </div>

            <div className="Down">
              <span>
                <input type="checkbox" id="choice" className="choice" />
                <label htmlFor="choice">
                  I don't want to receive marketing communications from
                  HomeHaven.{" "}
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
