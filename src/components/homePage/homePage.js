import React from "react";
import Navbar from "../Navbar";
import HomePageFlag from "./HomePageFlag";

const HomePage = (props) => {

  const manageElection = (city) => {
    if (city == "roma") {
      props.flightHandler("Roma")
    } else if (city == "Paris") {
      props.flightHandler("Paris")
    } else if (city == "Barcelona") {
      props.flightHandler("Barcelona")
    } else if (city == "Madrid") {
      props.flightHandler("Madrid")
    } else if (city == "Berlin") {
      props.flightHandler("Berlin")
    }

  }

  return (
    <div className="">
      <h1 className="text-center p-5">Bienvenido {props.user.name}, elige destino de tu vuelo</h1>
      <div className=" d-flex justify-content-center align-content-center align-items-center flex-row h-100">

        <div className="w-25 ">
          <HomePageFlag image="https://th.bing.com/th/id/OIP.mO2EfRE-TxiZgZ20kE6aOwHaE7?w=280&h=187&c=7&r=0&o=5&pid=1.7" city="Paris" manageElection={manageElection} />
          <HomePageFlag image="https://th.bing.com/th/id/OIP.jvAxxY29W4KwlLrSiIAJGwHaEt?pid=ImgDet&rs=1" city="Madrid" manageElection={manageElection} />
        </div>
        <div className="w-25 ">
          <HomePageFlag image="https://th.bing.com/th/id/OIP.pwQrR98xyXoIXmuHx0dR7gHaE8?w=264&h=180&c=7&r=0&o=5&pid=1.7" city="Berlin" manageElection={manageElection} />
          <HomePageFlag image="https://th.bing.com/th/id/OIP.5em7nCtxs5IPe1uJfq-iigHaE7?w=302&h=201&c=7&r=0&o=5&pid=1.7" city="Barcelona" manageElection={manageElection} />
        </div>
        <HomePageFlag image="https://th.bing.com/th/id/OIP.mGsCqP-_xUB14etSqNGZjgHaE8?w=252&h=180&c=7&r=0&o=5&pid=1.7" city="roma" manageElection={manageElection} />
      </div >
    </div>
  );
};

export default HomePage;
