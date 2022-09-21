import React, { useState } from "react";
import "./index.scss";

export default function LogIn() {
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");

  return (
    <div className="login_container">
      <from>
        <h2>Login</h2>
        <label htmlFor="login_email">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setLoginemail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="login_password">
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setLoginpassword(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Login" />
      </from>
    </div>
  );
}
