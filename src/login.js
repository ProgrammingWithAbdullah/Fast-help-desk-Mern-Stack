import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useNavigate();
  let x = 0;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });
      const data = await response.json();
      console.log(data);
      history("/indexx");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      if (signupPassword !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: signupEmail,
          password: signupPassword,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="#" className="nav_logo">
            Fast Help Desk
          </a>
          <ul className="nav_items">
            <li className="nav_item">
              <a href="#" className="nav_link">
                Home
              </a>
              <a href="#" className="nav_link">
                Contact
              </a>
              <a href="#" className="nav_link">
                Services
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <br></br>
      <br></br>
      <div
        className="wrapper"
        style={{
          placeItems: "center",
          marginLeft: "450px",
          marginTop: "50px",
        }}
      >
        <div className="title-text">
          <div className="title login">Login Form</div>
          <div className="title signup">Signup Form</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked />
            <input type="radio" name="slide" id="signup" />
            <label htmlFor="login" className="slide login">
              Login
            </label>
            <label htmlFor="signup" className="slide signup">
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form className="login" onSubmit={handleLoginSubmit}>
              <div className="field">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Submit" />
              </div>
            </form>
            <form className="signup" onSubmit={handleSignupSubmit}>
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
