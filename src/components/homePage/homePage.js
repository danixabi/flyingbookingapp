import React from "react";
import Navbar from "../Navbar";

const HomePage = (props) => {

  const manageElection = (city) => {
    if (city == "roma") {
      props.flightHandler("roma")
    } else if (city == "paris") {
      props.flightHandler("paris")
    } else if (city == "barcelona") {
      props.flightHandler("barcelona")
    } else if (city == "madrid") {
      props.flightHandler("madrid")
    } else if (city == "berlin") {
      props.flightHandler("berlin")
    }



  }

  return (
    <div className="">
      <h1 className="text-center">DESTINO DEL VIAJE</h1>
      <div className="min-vh-100 d-flex justify-content-center align-content-center align-items-center flex-row h-100">

        <div className="w-25 h-25">
          <div onClick={() => { manageElection("paris") }}>
            <h2>Paris</h2>
            <img src="https://th.bing.com/th/id/OIP.mO2EfRE-TxiZgZ20kE6aOwHaE7?w=280&h=187&c=7&r=0&o=5&pid=1.7" width="300px" height="200px" />
          </div>
          <div onClick={() => { manageElection("madrid") }}>
            <h2>Madrid</h2>
            <img src="https://th.bing.com/th/id/OIP.jvAxxY29W4KwlLrSiIAJGwHaEt?pid=ImgDet&rs=1" width="300px" height="200px" />
          </div>
        </div>
        <div className="w-25 h-25">
          <div onClick={() => { manageElection("berlin") }}>
            <h2>Berlin</h2>
            <img src="https://th.bing.com/th/id/OIP.pwQrR98xyXoIXmuHx0dR7gHaE8?w=264&h=180&c=7&r=0&o=5&pid=1.7" width="300px" height="200px" />
          </div>
          <div onClick={() => { manageElection("barcelona") }}>
            <h2>Barcelona</h2>
            <img src="https://th.bing.com/th/id/OIP.5em7nCtxs5IPe1uJfq-iigHaE7?w=302&h=201&c=7&r=0&o=5&pid=1.7" width="300px" height="200px" />
          </div>
        </div>
        <div className="btn" onClick={() => { manageElection("roma") }}>
          <h2 className="w-25 h-25">Roma</h2>
          <img src="https://th.bing.com/th/id/OIP.mGsCqP-_xUB14etSqNGZjgHaE8?w=252&h=180&c=7&r=0&o=5&pid=1.7" width="300px" height="200px" />
        </div>

      </div >
    </div>
  );
};

export default HomePage;
