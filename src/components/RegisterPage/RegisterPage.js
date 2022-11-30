import React from "react";
import { Form, Button } from "react-bootstrap";

const RegisterPage = (props) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default RegisterPage;
