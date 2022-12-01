import React, { useState, useEffect } from 'react'
import FlightSelectionFlys from './FlightSelectionFlys'
import axios from "axios"

const FlightSelection = (props) => {
    var show;

    const [flights, setFlights] = useState([])
    const getFlights = async () => {
        const res = await axios.get('http://localhost:8080/flights/all')
        console.log(res.data)
        setFlights(res.data)
    }

    useEffect(() => {

        getFlights()
    }, [])
    console.log(flights)

    show =
        flights.map((flight) => (

            <FlightSelectionFlys
                user={props.user}
                flight={flight}
                key={flight.id}
                flightDate={props.flightDate}
                citySelected={props.citySelected}
                bookingInfoHandler={props.bookingInfoHandler}
            />

        ))


    return (

        <div className='d-flex flex-column align-items-center'>
            <h2>A continuación aparecen los vuelos encontrados</h2>
            {show}
        </div>



    )
}



export default FlightSelection