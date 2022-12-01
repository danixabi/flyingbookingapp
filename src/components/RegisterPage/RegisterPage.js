import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"

const RegisterPage = (props) => {

  console.log(props.bookingInfo)

  const insertReservation = () => {

    axios
      .post("http://localhost:8080/reservations/create", props.bookingInfo)
      .then(res => console.log(res))
      .catch(err => console.log(err));



  }

  return (
    <div className="d-flex flex-column align-items-center">
      <Form className="p-2 d-flex flex-column ">

        <Form.Group className="mb-3 m" controlId="formBasicEmail">

          <Form.Label>Name</Form.Label>

          <Form.Control type="name" placeholder="Enter Name" />

          <Form.Text className="text-muted"></Form.Text>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Label>Surname</Form.Label>

          <Form.Control type="surname" placeholder="Enter Surname" />

          <Form.Text className="text-muted"></Form.Text>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Label>Identification</Form.Label>

          <Form.Control

            type="identification"

            placeholder="Enter Identification"

          />

          <Form.Text className="text-muted"></Form.Text>

        </Form.Group>


        <Form.Select aria-label="Default select example">

          <option>Age</option>

          <option value="1">Less than 2 years</option>

          <option value="2">Between 2 and 9 years</option>

          <option value="3">Older than 9 years</option>

        </Form.Select>

        <Button onClick={insertReservation} className="mt-2" variant="primary" type="submit">

          Submit

        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
