import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Video from "../Assets/bg_video.mp4";
import "./index.scss";

export default function LogIn() {
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
  const [menu, setMenu] = useState(true);

  function handleLogin(e) {
    e.preventDefault();

    let email = localStorage.getItem("email").replace(/"/g, "");
    let psw = localStorage.getItem("password").replace(/"/g, "");

    console.log(email)
    console.log(psw)

    if (email === loginemail && psw === loginpassword) {
      console.log("Successful log in!")
      setMenu(false)
    } else if (email !== loginemail || psw !== loginpassword){
      console.log("Wrong email or password!")
    }
  }

  return (
    <div className="login_container">
      {menu ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <label htmlFor="login_email">
            {/* <h3>Email:</h3> */}
            <input
              id="login_email"
              type="email"
              placeholder="Email"
              onChange={(e) => setLoginemail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="login_password">
            {/* <h3>Password:</h3> */}
            <input
              id="login_password"
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginpassword(e.target.value)}
              required
            />
          </label>
          <input className="login_btn" type="submit" value="Login" />
        </form>
      ) : (
        <Navigate to="/menu" />
      )}
      <Link to="/signup">Sign up now</Link>
      {/* <video autoPlay loop muted>
        <source src={Video} type="video/mp4"/>
      </video> */}
    </div>
  );
}


