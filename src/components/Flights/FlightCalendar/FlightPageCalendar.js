import React, { useState } from "react";
import { Calendar } from "react-calendar";

const FlightPage = (props) => {
  const date = new Date();
  var day = date.getDate() + 1;
  var month = date.getMonth();
  var year = date.getFullYear() + 2;


  const [value, onChange] = useState(new Date());
  const getClick = (value, event) => {
    console.log(event.target.value)
    console.log(value)
    props.flightDateHandler(value);
  }


  return (
    <div className="w-50 d-flex flex-column justify-items-center align-items-center">
      Has seleccionado {props.flightSelect}
      <Calendar maxDate={new Date(year, month, day)} minDate={new Date()} onClickDay={getClick} onChange={onChange} value={value} />
    </div>
  );
};

export default FlightPage;
