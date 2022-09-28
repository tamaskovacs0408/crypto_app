import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function LogIn() {
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
  const [menu, setMenu] = useState(true);

  function handleLogin(e) {
    e.preventDefault();

    let email = localStorage.getItem("email").replace(/"/g, "");
    let psw = localStorage.getItem("password").replace(/"/g, "");

    console.log(email);
    console.log(psw);

    if (email === loginemail && psw === loginpassword) {
      console.log("Successful log in!");
      setMenu(false);
    } else if (email !== loginemail || psw !== loginpassword) {
      console.log("Wrong email or password!");
    }
  }

  return (
    <div className="login_container">
      <h2>Login</h2>
      {menu ? (
        <form onSubmit={handleLogin}>
          <div className="login_input_container">
            <FontAwesomeIcon className="login_icon" icon={faUser} />

            <input
              id="login_email"
              type="email"
              placeholder="Email"
              onChange={(e) => setLoginemail(e.target.value)}
              required
            />
          </div>

          <div className="login_input_container">
            <FontAwesomeIcon className="login_icon" icon={faLock} />
            <input
              id="login_password"
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginpassword(e.target.value)}
              required
            />
          </div>
          <input className="login_btn" type="submit" value="Login" />
        </form>
      ) : (
        <Navigate to="/menu" />
      )}
      <span className="signup_text">Need account? <Link className="signup_link" to="/signup">Sign up now</Link>!</span>
    </div>
  );
}
