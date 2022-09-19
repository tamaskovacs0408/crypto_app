import React from "react";
import { useState } from "react";
import "./index.scss";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="form_container">
      <form >
        <label htmlFor="e-mail">
          Email:
          <input
            id="e-mail"
            type="email"
            placeholder="Email address"
            aria-label="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="name">
          Username:
          <input
            id="name"
            type="text"
            placeholder="Name"
            aria-label="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="psw">
          Password: (min 8 characters)
          <input
            id="psw"
            type="password"
            placeholder="Password"
            minLength={8}
            aria-label="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
