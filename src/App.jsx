import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/HomePage/HomePage";
import "./components/LoginPage/LoginPage";
import "./components/Flights/FlightCalendar/FlightPageCalendar";
import "./components/MyFlights/FlightsBooked";
import LoginPage from "./components/LoginPage/LoginPage";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/HomePage/HomePage";
import FlightSelection from "./components/Flights/FlightsPage/FlightSelection";
import Navbar from "./components/Navbar";
import FlightPageCalendar from "./components/Flights/FlightCalendar/FlightPageCalendar";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import axios from 'axios';


const vuelos = [
  {
    precio: "150",
    fecha: new Date("05-01-2023"),
    origen: "Sevilla",
    destino: "Madrid",
    id: "423423"
  },
  {
    precio: "150",
    fecha: new Date("05-04-2023"),
    origen: "Sevilla",
    destino: "Madrid",
    id: "54312"
  },
  {
    precio: "100",
    fecha: new Date("05-05-2023"),
    origen: "Sevilla",
    destino: "Barcelona",
    id: "6542"
  },
  {
    precio: "120",
    fecha: new Date("12-01-2022"),
    origen: "Madrid",
    destino: "Roma",
    id: "43543"
  },
  {
    precio: "90",
    fecha: new Date("11-29-2022"),
    origen: "Madrid",
    destino: "Roma",
    id: "534534"

  },
  {
    precio: "100",
    fecha: new Date("05-05-2023"),
    origen: "Sevilla",
    destino: "Madrid",
    id: "213421"
  },
  {
    precio: "120",
    fecha: new Date("05-12-2023"),
    origen: "Roma",
    destino: "Paris",
    id: "32"
  }
]






const App = () => {

  /*   <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Flight" element={<FlightPage />} />
        <Route path="/Flight/Form" element={<FlightForm />} />
        <Route path="/FlightSelector" element={<FlightSelection />} />
      </Routes>
    </BrowserRouter>;
   */

  var show;
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState([])
  const [flightSelect, setflightSelect] = useState(false)
  const [citySelected, setCitySelected] = useState("")
  const [bookingInfo, setBookingInfo] = useState(null)
  const [flightDate, setFlightDate] = useState(null)

  const goHome = () => {
    setflightSelect(false)
    setBookingInfo(false)
    setFlightDate(null)
  }

  const bookingInfoHandler = (state) => {

    setFlightDate(null)
    setBookingInfo(state)
  }

  const flightHandler = (city) => {
    setflightSelect(true)
    setCitySelected(city)
    console.log(city)
  }

  const flightDateHandler = (date) => {
    setFlightDate(date)
    setflightSelect(false)
  }

  const logOut = () => {
    setLogin(false);
    setflightSelect(false)
    setFlightDate(null)
    setBookingInfo(false)
    setUser([])
  }

  if (!login) {
    show = (

      <LoginPage setLogin={setLogin} setUser={setUser} />


    );
  } else if (flightSelect) {
    show = (
      <div className="">
        <Navbar logOut={logOut} goHome={goHome} />
        <FlightPageCalendar citySelected={citySelected} flightSelect={flightSelect} flightDateHandler={flightDateHandler} />
      </div>
    );

  } else if (flightDate != null) {
    show = (
      <div>
        <Navbar logOut={logOut} goHome={goHome} />
        <FlightSelection
          bookingInfoHandler={bookingInfoHandler}
          flightDate={flightDate}
          citySelected={citySelected}
          vuelos={vuelos}
          user={user}
        />
      </div>


    );


  } else if (bookingInfo) {
    show = (
      <div>
        <Navbar logOut={logOut} goHome={goHome} />
        <RegisterPage goHome={goHome} bookingInfo={bookingInfo} />
      </div>
    )
  } else {
    console.log(user)
    show = (
      <div>
        <Navbar logOut={logOut} goHome={goHome} />
        <HomePage user={user} onLoad setLogin={setflightSelect} flightHandler={flightHandler} />
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
