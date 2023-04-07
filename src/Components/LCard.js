import React, { useState, useEffect } from "react";
import "./LCard.css";

function LCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Logged in successfully!");
  };

  return (
    <>
      <div className="card-container">
        <div className="signup-card">
          <div className="content">
            <h4>Log in to your account</h4>

            <form onSubmit={handleLogin}>
              <div className="input-wrapper">
                <label htmlFor="username"></label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
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
