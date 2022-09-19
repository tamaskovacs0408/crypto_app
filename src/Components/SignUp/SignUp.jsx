import React from "react";
import { useState, useEffect } from "react";
import "./index.scss";

export default function SignUp() {
  const [username, setUsername] = useState(() => {
    const saved = localStorage.getItem("username");
    const initialValue = saved;
    return initialValue || "";
  });
  const [password, setPassword] = useState(() => {
    const saved = localStorage.getItem("password");
    const initialValue = saved;
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);
  useEffect(() => {
    localStorage.setItem("password", password);
  }, [password]);

  return (
    <div className="form_container">
      <form>
        <label htmlFor="username">
          Username:
          <input
            id="username"
            type="text"
            value={username}
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

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
