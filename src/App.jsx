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
import Bookings from "./components/Bookings/Bookings";




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
  const [bookingCheck, setBookingCheck] = useState(false)
  const [flightDate, setFlightDate] = useState(null)

  const goHome = () => {
    setflightSelect(false)
    setBookingInfo(false)
    setFlightDate(null)
    setBookingCheck(false)
  }

  const bookingInfoHandler = (state) => {

    setFlightDate(null)
    setBookingInfo(state)
  }

  const bookingCheckHandler = () => {
    setBookingCheck(true)
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
    setBookingCheck(false)
  }

  if (!login) {
    show = (

      <LoginPage setLogin={setLogin} setUser={setUser} />


    );
  } else if (flightSelect) {
    show = (
      <div className="">
        <Navbar bookingCheckHandler={bookingCheckHandler} logOut={logOut} goHome={goHome} />
        <FlightPageCalendar citySelected={citySelected} flightSelect={flightSelect} flightDateHandler={flightDateHandler} />
      </div>
    );

  } else if (flightDate != null) {
    show = (
      <div>
        <Navbar bookingCheckHandler={bookingCheckHandler} logOut={logOut} goHome={goHome} />
        <FlightSelection
          bookingInfoHandler={bookingInfoHandler}
          flightDate={flightDate}
          citySelected={citySelected}
          user={user}
        />
      </div>


    );


  } else if (bookingInfo) {
    show = (
      <div>
        <Navbar bookingCheckHandler={bookingCheckHandler} logOut={logOut} goHome={goHome} />
        <RegisterPage goHome={goHome} bookingInfo={bookingInfo} />
      </div>
    )
  } else if (bookingCheck) {
    show = (
      <div>
        <Navbar bookingCheckHandler={bookingCheckHandler} logOut={logOut} goHome={goHome} />
        <Bookings user={user} />
      </div>
    )
  } else {
    console.log(user)
    show = (
      <div>
        <Navbar bookingCheckHandler={bookingCheckHandler} logOut={logOut} goHome={goHome} />
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
