import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import toast, {Toaster} from 'react-hot-toast';

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
      toast.success("Successful log in!", {
        duration: 1000,
      });
      setTimeout(() => {
        setMenu(false);
      }, 1000);
    } else if (email !== loginemail || psw !== loginpassword) {
      toast.error("Wrong email or password!", {
        duration: 1500,
      });
    }
  }

  return (
    <>
    <Toaster/>
      <h1 className="main_title">HODLER CHECKER</h1>
      <div className="login_container">
        <h2>Login</h2>
        {menu ? (
          <form onSubmit={handleLogin}>
            <div className="login_input_container">
              <FontAwesomeIcon className="login_icon" icon={faEnvelope} />

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
        <span className="signup_text">
          Need account?{" "}
          <Link className="signup_link" to="/signup">
            Sign up now
          </Link>
          !
        </span>
      </div>
    </>
  );
}
