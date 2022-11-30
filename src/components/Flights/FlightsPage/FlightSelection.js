import React from 'react'
import FlightSelectionFlys from './FlightSelectionFlys'

const FlightSelection = (props) => {
    var show;


    show =
        props.vuelos.map((vuelo) => (

            <FlightSelectionFlys
                key={vuelo.id}
                id={vuelo.id}
                flightDate={props.flightDate}
                citySelected={props.citySelected}
                prize={vuelo.precio}
                destiny={vuelo.destino}
                origin={vuelo.origen}
                date={vuelo.fecha}
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