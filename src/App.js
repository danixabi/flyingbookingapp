import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import "./components/homePage/homePage";
import "./components/loginPage/loginPage";
import "./components/FlightsPage/FlightPage";
import "./components/FlightsPage/FlightForm/FlightForm";
import "./components/MyFlights/FlightsBooked";
import Navbar from "./components/Navbar";
=======
<<<<<<< HEAD
import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";
import FlightPage from "./components/FlightsPage/FlightPage";
import FlightForm from "./components/FlightsPage/FlightForm/FlightForm";
import MyFlights from "./components/MyFlights/FlightsBooked";
>>>>>>> Development

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
=======
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

>>>>>>> e0e18637654b7ad04e80bdd7f90aafcdb26d2689
}

export default App;
