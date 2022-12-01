import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


const LoginPage = (props) => {

  var userSaving
  const [nameLogin, setNameLogin] = useState('');
  const [dniLogin, setDniLogin] = useState('');
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get('http://localhost:8080/users/all')
    console.log(res.data)
    setUsers(res.data)
  }

  useEffect(() => {

    getUsers()
  }, [])

  const checkUser = () => {
    {
      {
        users?.map((user) => {
          if (user.name == nameLogin && user.identification == dniLogin) {
            userSaving = {
              name: nameLogin,
              identification: dniLogin,
              id: user.userId
            }
            props.setUser(userSaving)
            props.setLogin(true)


          }


        })
      }
    }

  }



  const handleUserChange = (event) => {
    setNameLogin(event.target.value)
  }
  const handleDni = (event) => {
    setDniLogin(event.target.value)
  }
  return (
    <div className='d-flex  align-content-center justify-content-center mt-5'>
      <div className="inputDiv m-5 p-2 d-flex w-25 flex-column align-content-center justify-content-center">
        <h1 className='text-center'>Sign in</h1>
        <label>Username</label>
        <input type="text" onChange={handleUserChange}></input>
        <label>DNI</label>
        <input type="text" onChange={handleDni}></input>
        <button onClick={checkUser} className='mt-4 btn btn-primary'>SIGN IN</button>
        <div className='m-3 p-3 d-flex flex-column justify-content-center align-content-center'>
        </div>
      </div>
    </div>
  )
};

export default LoginPage;
