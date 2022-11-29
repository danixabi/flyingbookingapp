import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/homePage/homePage";
import "./components/loginPage/loginPage";
import "./components/FlightsPage/FlightPage";
import "./components/FlightsPage/FlightForm/FlightForm";
import "./components/MyFlights/FlightsBooked";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<loginPage />} />
        <Route path="/home" element={<homePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
