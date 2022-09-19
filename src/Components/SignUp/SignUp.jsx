import React from "react";
import { useState } from "react";
import "./index.scss";

export default function SignUp() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form_container">
      <form>
        <label htmlFor="fullname">
          <input
            id="fullname"
            type="text"
            value={name}
            placeholder="Full name"
            aria-label="fullname"
          />
        </label>
        <label htmlFor="username">
          <input
            id="username"
            type="text"
            value={userName}
            placeholder="Username"
            aria-label="username"
            required
          />
        </label>
        <label htmlFor="psw">
          <input
            id="psw"
            type="password"
            value={password}
            placeholder="Password"
            aria-label="password"
            required
          />
        </label>

        <input type="submit" />
      </form>
    </div>
  );
}
