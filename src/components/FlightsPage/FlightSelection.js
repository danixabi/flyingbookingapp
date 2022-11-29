import React from 'react'

const FlightSelection = (props) => {
    return (
        <div>
            Tu fecha de vuelo es {props.flightDate.getDay()}-{props.flightDate.getMonth()}-{props.flightDate.getFullYear()} FlightSelection

        </div>
    );
}

export default FlightSelection