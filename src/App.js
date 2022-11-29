import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/homePage/HomePage";
import "./components/loginPage/LoginPage";
import "./components/FlightsPage/FlightPage";
import "./components/FlightsPage/FlightForm/FlightForm";
import "./components/MyFlights/FlightsBooked";
import LoginPage from "./components/loginPage/LoginPage";
import { useState } from "react";
import HomePage from "./components/homePage/HomePage";

function App() {

  var show = "";
  const [login, setLogin] = useState(false)

  if (!login) {
    show = (

      <LoginPage setLogin={setLogin} />
    );
  } else {
    show = (

      <HomePage setLogin={setLogin} />
    );
  }
  /*  <BrowserRouter>
          <Routes>
            <Route path="/login" element={<loginPage />} />
            <Route path="/home" element={<homePage />} />
          </Routes>
      </BrowserRouter> */
  return show

}

export default App;
