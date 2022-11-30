import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/homePage/homePage";
import "./components/loginPage/loginPage";
import "./components/FlightsPage/FlightPage";
import "./components/FlightsPage/FlightForm/FlightForm";
import "./components/MyFlights/FlightsBooked";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<loginPage />} />
        <Route
          path="/"
          element={
            <homePage>
              <Navbar />{" "}
            </homePage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
