import React, { useState, useEffect } from 'react'
import axios from "axios"

const BookingData = (props) => {
    const [flights, setFlights] = useState([])
    const getFlights = async () => {
        const res = await axios.get('http://localhost:8080/flights/' + props.reservation.flightId)
        console.log(res.data)
        setFlights(res.data)
    }

    useEffect(() => {

        getFlights()
    }, [])
    console.log(flights)

    return (
        <div className='d-flex justify-content-center align-items-center flex-column p-2'>
            <button className='btn btn-primary'>
                Fly from {flights.origin} to {flights.destiny} the day/hours {flights.departureDate}
            </button>
        </div>
    )
}

export default BookingData