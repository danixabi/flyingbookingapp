import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/homePage/HomePage";
import "./components/loginPage/LoginPage";
import "./components/FlightsPage/FlightPage";
import "./components/FlightsPage/FlightForm/FlightForm";
import "./components/MyFlights/FlightsBooked";
import LoginPage from "./components/loginPage/LoginPage";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/homePage/HomePage";
import FlightPage from "./components/FlightsPage/FlightPage";
import FlightSelection from "./components/FlightsPage/FlightSelection";

function App() {

  var show = "";
  const [login, setLogin] = useState(false)
  const [flightSelect, setflightSelect] = useState("")
  const [flightDate, setFlightDate] = useState(null)

  const flightHandler = (city) => {
    setflightSelect(city)
    console.log(city)
  }

  const flightDateHandler = (date) => {
    console.log(date)
    setFlightDate(date)
    setflightSelect("")
  }

  if (!login) {
    show = (
      <div>

        <LoginPage setLogin={setLogin} />
      </div>
    );
  } else if (flightSelect != "") {
    show = (
      <div className="d-flex justify-content-center">
        <FlightPage flightSelect={flightSelect} flightDateHandler={flightDateHandler} />
      </div>
    );

  } else if (flightDate != null) {
    show = (
      <div className="d-flex justify-content-center">
        <FlightSelection flightDate={flightDate} />
      </div>
    );
  } else {
    show = (
      <div>
        <HomePage setLogin={setflightSelect} flightHandler={flightHandler} />
      </div>
    );
  }
  /*  <BrowserRouter>
          <Routes>
            <Route path="/login" element={<loginPage />} />
            <Route path="/home" element={<homePage />} />
          </Routes>
      </BrowserRouter> */
  return <div className=" min-vh-100">{show}</div>

}

export default App;
