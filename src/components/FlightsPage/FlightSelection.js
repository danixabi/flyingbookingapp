import React from 'react'

const FlightSelection = (props) => {
    var show;

    if (props.origin == props.citySelected) {

    }
    if (props.flightDate.getMonth() != props.date.getMonth()) {

    }

    return (
        <div>
            dia {props.flightDate.getDay()}
            cit{props.citySelected}
            origin{props.origin}


        </div>
    );
}

export default FlightSelection