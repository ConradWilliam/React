import React from "react";
import "./LCard.css";
import LGoogleAuth from "./LGoogleAuth";

function LCard() {
  return (
    <>
    
      <div className="card-container">
        <div className="signup-card">
          <div className="content">
            <h4>Log in to your account</h4>

            
            <LGoogleAuth
              googleLabel="Login with Google"
              facebookLabel="Login with Facebook"
            />


            <p className="or">or</p>

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
              <p className="forgot-pass">
                <a href="/">Forgot Password?</a>
              </p>
              <p className="no-account">
                Dont have an account yet? <a href="/SignUp">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LCard;
