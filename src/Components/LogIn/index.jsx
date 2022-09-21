import React, { useState } from "react";
import MainMenu from "../MainMenu";
import "./index.scss";

export default function LogIn() {
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
  const [menu, setMenu] = useState(true);

  function handleLogin(e) {
    e.perventDefault();

    let email = localStorage.getItem("email");
    let psw = localStorage.getItem("password");

    if (email !== loginemail || psw !== loginpassword) {
      console.log("Wrong email or password!")
    } else {
      console.log("Successful log in!")
      setMenu(false)
    }
  }

  return (
    <div className="login_container">
      {menu ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <label htmlFor="login_email">
            Email:
            <input
              id="login_email"
              type="email"
              placeholder="Email"
              onChange={(e) => setLoginemail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="login_password">
            Password:
            <input
              id="login_password"
              type="password"
              placeholder="password"
              onChange={(e) => setLoginpassword(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="Login" />
        </form>
      ) : (
        <MainMenu />
      )}
    </div>
  );
}

{
  /*  */
}
