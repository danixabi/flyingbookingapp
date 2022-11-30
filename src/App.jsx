import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/HomePage/HomePage";
import "./components/LoginPage/LoginPage";
import "./components/Flights/FlightCalendar/FlightPageCalendar";
import "./components/MyFlights/FlightsBooked";
import LoginPage from "./components/LoginPage/LoginPage";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/HomePage/HomePage";
import FlightPage from "./components/Flights/FlightCalendar/FlightPageCalendar";
import FlightSelection from "./components/Flights/FlightsPage/FlightSelection";

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
    fecha: new Date("05-01-2023"),
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
    fecha: new Date("05-12-2023"),
    origen: "Sevilla",
    destino: "Roma",
    id: "43543"
  },
  {
    precio: "90",
    fecha: new Date("03-01-2023"),
    origen: "Sevilla",
    destino: "Madrid",
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


function App() {

  var show = "";
  const [login, setLogin] = useState(false)
  const [flightSelect, setflightSelect] = useState(false)
  const [citySelected, setCitySelected] = useState("")
  const [flightDate, setFlightDate] = useState(null)

  const flightHandler = (city) => {
    setflightSelect(true)
    setCitySelected(city)
    console.log(city)
  }

  const flightDateHandler = (date) => {
    console.log(date)
    setFlightDate(date)
    setflightSelect(false)
  }

  if (!login) {
    show = (


      <LoginPage setLogin={setLogin} />

    );
  } else if (flightSelect) {
    show = (
      <div className="d-flex justify-content-center">
        <FlightPage flightSelect={flightSelect} flightDateHandler={flightDateHandler} />
      </div>
    );

  } else if (flightDate != null) {

    show = (
      <FlightSelection

        flightDate={flightDate}
        citySelected={citySelected}
        vuelos={vuelos}
      />



    );


  } else {
    show = (

      <HomePage setLogin={setflightSelect} flightHandler={flightHandler} />

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
