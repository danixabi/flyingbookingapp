import React from "react";

<<<<<<< HEAD
const loginPage = () => {
<<<<<<< HEAD
  return <div>loginPage</div>;
=======
  return (
    <div>
      <Navbar />
    </div>
  );
=======
const LoginPage = (props) => {
  return (
    <div className='d-flex  align-content-center justify-content-center mt-5'>
      <div className="inputDiv m-5 p-2 d-flex w-25 flex-column align-content-center justify-content-center">
        <h1 className='text-center'>Sign in</h1>
        <label>Username</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password"></input>
        <button onClick={props.setLogin} className='mt-4 btn btn-primary'>SIGN IN</button>
        <div className='m-3 p-3 d-flex flex-column justify-content-center align-content-center'>
        </div>
      </div>
    </div>
  )
>>>>>>> e0e18637654b7ad04e80bdd7f90aafcdb26d2689
>>>>>>> Development
};

export default LoginPage;
