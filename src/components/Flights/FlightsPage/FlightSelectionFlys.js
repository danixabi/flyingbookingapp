import React from 'react'

const FlightSelectionFlys = (props) => {

    var show = "";


    if (props.destiny == props.citySelected) {
        if (props.flightDate.getFullYear() == props.date.getFullYear()) {

            if (props.flightDate.getMonth() == props.date.getMonth()) {

                if (props.flightDate.getDay() - 3 < props.date.getDay() && props.flightDate.getDay() + 3 > props.date.getDay()) {
                    show = (
                        <button
                            className='btn btn-primary m-2'>
                            Flight from {props.origin} to {props.destiny} at {props.date.getMonth() + 1}-{props.date.getDay()}-{props.date.getFullYear()}
                        </button>);
                }
            }
        }
    }
    return (
        show
    );

}

export default FlightSelectionFlys