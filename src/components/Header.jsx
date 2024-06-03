import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";
const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>CryptoVerse </h1>
        <FaEthereum color="orange" size={"25"} />
      </div>
      <ul>
        <li>
          <Link to="/coins">Coins</Link>
          <Link to="/signup">signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
