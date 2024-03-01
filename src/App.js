import "./App.css";
import Navbar from "./Navbar";
import Users from "./Users";
import { Routes, Route } from "react-router-dom";
import UserCreate from "./UserCreate";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<UserCreate />} />
      </Routes>
    </div>
  );
}

export default App;
