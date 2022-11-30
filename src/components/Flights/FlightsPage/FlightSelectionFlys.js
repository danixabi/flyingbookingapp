import React from 'react'

const FlightSelectionFlys = (props) => {

    var show = ""
    var objFly;
    const setFly = () => {


        objFly = {
            id: props.id,
            date: new Date(props.date.getFullYear(), props.date.getMonth(), props.date.getDate()),

        }
        console.log(objFly)
        props.bookingInfoHandler(objFly)



    }

    if (props.destiny == props.citySelected) {
        if (props.flightDate.getFullYear() == props.date.getFullYear()) {

            if (props.flightDate.getMonth() == props.date.getMonth()) {

                if (props.flightDate.getDate() - 3 < props.date.getDate() && props.flightDate.getDate() + 3 > props.date.getDate() && new Date() > new Date(props.date.getMonth(), props.date.getDay(), props.date.getYear())) {
                    show = (
                        <button
                            onClick={setFly}
                            className='btn btn-primary m-2'>
                            {props.id} Flight from {props.origin} to {props.destiny} at {props.date.getMonth() + 1}-{props.date.getDate()}-{props.date.getFullYear()}
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