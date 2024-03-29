import "./App.css";
import React, { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setIsLogin("valid");
    } else {
      setIsLogin("invalid");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isLogin === "valid" ? (
        <p>Welcome, user!</p>
      ) : (
        <>
          {isLogin === "invalid" && <p>Invalid username or password</p>}
          <form onSubmit={handleClick}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            ></input>
            <br />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            ></input>
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
