import React from 'react'

const FlightSelectionFlys = (props) => {
    console.log(props.flight)
    const dateFlight = new Date(props.flight.departureDate)
    var show = ""
    var objFly;
    const setFly = () => {


        objFly = {
            flightId: props.flight.flightId,
            userId: props.user.id
        }

        console.log(objFly)
        props.bookingInfoHandler(objFly)



    }
    console.log(dateFlight.getMonth())
    console.log(props.flightDate)

    if (props.flight.destiny == props.citySelected) {
        if (props.flightDate.getFullYear() == dateFlight.getFullYear()) {

            if (props.flightDate.getMonth() == dateFlight.getMonth()) {

                if (props.flightDate.getDate() - 3 < dateFlight.getDate() && props.flightDate.getDate() + 3 > dateFlight.getDate() && new Date() > new Date(dateFlight.getMonth(), dateFlight.getDay(), dateFlight.getYear())) {
                    show = (
                        <button
                            onClick={setFly}
                            className='btn btn-primary m-2'>
                            {props.flight.flightId} Flight from {props.flight.origin} to {props.flight.destiny} at {dateFlight.getMonth() + 1}-{dateFlight.getDate()}-{dateFlight.getFullYear()}
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