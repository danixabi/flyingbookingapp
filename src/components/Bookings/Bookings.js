import React, { useState, useEffect } from 'react'
import axios from "axios"
import BookingData from './BookingData'


const Bookings = (props) => {
    var show = ""
    const [reservations, setReservations] = useState([])
    const getReservations = async () => {
        const res = await axios.get('http://localhost:8080/reservations/user/' + props.user.identification)
        console.log(res.data)
        setReservations(res.data)
    }

    useEffect(() => {

        getReservations()
    }, [])
    console.log(reservations)

    show = (reservations.map((reservation) => (
        <BookingData user={props.user} reservation={reservation} />

    )))

    console.log(props.user)
    return (
        <div>
            {show}
        </div>
    )
}

export default Bookings