import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/HomePage/HomePage";
import "./components/LoginPage/LoginPage";
import "./components/FlightsPage/FlightPage";
import "./components/FlightsPage/FlightForm/FlightForm";
import "./components/MyFlights/FlightsBooked";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import FlightPage from "./components/FlightsPage/FlightPage";
import FlightSelection from "./components/FlightsPage/FlightSelection";
import FlightForm from "./components/FlightsPage/FlightForm/FlightForm";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Flight" element={<FlightPage />} />
      <Route path="/Flight/Form" element={<FlightForm />} />
      <Route path="/FlightSelector" element={<FlightSelection />} />
    </Routes>
  </BrowserRouter>;

  return <div>{(show = FlightForm)}</div>;
}

export default App;
