import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";

const Header = () => {
  const auth = localStorage.getItem("user")
  const logout  = ()=>{
    localStorage.clear()
  }
  return (
    <div className="navbar">
      <div className="logo">
        <h1>CryptoVerse </h1>
        <FaEthereum color="orange" size={"25"} />
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>

          <Link to="/signup">signup</Link>
          <Link onClick={logout} to="/">Logout</Link>

        </li>
      </ul>
    </div>
  );
};

export default Header;
