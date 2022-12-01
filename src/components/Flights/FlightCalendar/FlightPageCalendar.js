import React, { useState } from "react";
import { Calendar } from "react-calendar";

const FlightPageCalendar = (props) => {
  const date = new Date();
  var day = date.getDate() + 1;
  var month = date.getMonth();
  var year = date.getFullYear() + 2;


  const [value, onChange] = useState(new Date());
  const getClick = (value, event) => {
    props.flightDateHandler(value);
  }


  return (
    <div className="d-flex flex-column align-items-center">
      Has seleccionado {props.citySelected}
      <Calendar className="w-50" maxDate={new Date(year, month, day)} minDate={new Date()} onClickDay={getClick} onChange={onChange} value={value} />
    </div>
  );
};

export default FlightPageCalendar;
