import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import bcrypt from "bcryptjs";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();

    const hashedPassword = bcrypt.hashSync(password, 10)

    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(hashedPassword));

    toast.success("Successful sign up!", {
      duration: 1000,
      style: {
        fontSize: "2rem",
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <>
      <Toaster />
      <h1 className="main_title">HODLER CHECKER</h1>
      <div className="signup_container">
        <h2>Sign up</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="signup_input_container">
            <FontAwesomeIcon className="signup_icon" icon={faUser} />
            <input
              id="name"
              type="text"
              placeholder="Name"
              aria-label="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="signup_input_container">
            <FontAwesomeIcon className="signup_icon" icon={faEnvelope} />
            <input
              id="e-mail"
              type="email"
              placeholder="Email address"
              aria-label="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="signup_input_container">
            <FontAwesomeIcon className="signup_icon" icon={faLock} />
            <input
              id="psw"
              type="password"
              placeholder="Password"
              minLength={6}
              aria-label="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input className="signup_btn" type="submit" value="Sign up" />
        </form>
      </div>
    </>
  );
}
