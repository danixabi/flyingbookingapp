import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import FlightsPage from "./components/FlightsPage/FlightPage";
import FlightsForm from "./components/FlightsPage/FlightForm/FlightForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Flights" element={<FlightsPage />} />
        <Route path="/Flights/Form" element={<FlightsForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
