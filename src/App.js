import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";
import FlightPage from "./components/FlightsPage/FlightPage";
import FlightForm from "./components/FlightsPage/FlightForm/FlightForm";
import MyFlights from "./components/MyFlights/FlightsBooked";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Flights" element={<FlightPage />} />
        <Route path="/Flights/Form" elemnt={<FlightForm />} />
        <Route path="/MyFlights" element={<MyFlights />} />
        <Route path="/Register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
