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
          Full name:
          <input
            id="fullname"
            type="text"
            value={name}
            placeholder="Full name"
            aria-label="fullname"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="username">
          Username:
          <input
            id="username"
            type="text"
            value={userName}
            placeholder="Username"
            aria-label="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label htmlFor="psw">
          Password: (min 8 characters)
          <input
            id="psw"
            type="password"
            value={password}
            placeholder="Password"
            minLength={8}
            aria-label="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <input type="submit" />
      </form>
    </div>
  );
}
