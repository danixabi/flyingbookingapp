import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";
import FlightPage from "./components/FlightsPage/FlightPage";
import FlightForm from "./components/FlightsPage/FlightForm/FlightForm";
import MyFlights from "./components/MyFlights/FlightsBooked";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Flights" element={<FlightPage />} />
        <Route path="/Flights/Form" elemnt={<FlightForm />} />
        <Route path="/MyFlights" element={<MyFlights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
