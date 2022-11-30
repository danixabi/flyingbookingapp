import React from 'react'

const HomePageFlag = (props) => {
    return (
        <div>
            <div className="w-25 h-25">
                <div onClick={() => { props.manageElection(props.city) }}>
                    <h2>{props.city}</h2>
                    <img src={props.image} alt="" width="300px" height="200px" />
                </div>
            </div>
        </div>
    )
}

export default HomePageFlag