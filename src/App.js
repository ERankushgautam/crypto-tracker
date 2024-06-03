import "./App.css";
import { Routes, Route } from "react-router-dom";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import SignUp from "./components/SignUp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Coins />} />
      <Route path="/coins/:id" element={<CoinDetails />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
