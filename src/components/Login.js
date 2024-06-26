
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupmsg, setSignupmsg] = useState();
  const API_URL = "http://localhost:5000";

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setSignupmsg("fill all input boxes");
    } else {
      console.log(email, password);
      let result = await fetch(`${API_URL}/login`, {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      navigate("/")
    }
  };

  return (
    <div className="login">
      <h1>CRYPTOVERSE</h1>
      <h1>Login to access website</h1>
      <div className="form">
        <input
          required
          value={email}
          className="input-box"
          id="email"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required
          value={password}
          className="input-box"
          id="pass"
          type="password"
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{signupmsg}</p>
        <button onClick={handleLogin} id="signup-btn">
          Login
        </button>
      </div>
      <div id="login">
        <p>New User ?? then</p>
        <button id="login-btn">
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
