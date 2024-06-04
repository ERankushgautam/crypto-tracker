import "./App.css";
import { Routes, Route } from "react-router-dom";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Coins />} />
      <Route path="/coins/:id" element={<CoinDetails />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
