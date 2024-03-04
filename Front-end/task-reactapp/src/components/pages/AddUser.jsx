import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AddUser = () => {

  const firstname = useRef('');
  const lastname = useRef('');
  const email = useRef('');
  const mobileno = useRef('');
  const optional = useRef('');

  const navigate = useNavigate();

  const addUserHandler = () => {
    let payload = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
      mobileno: mobileno.current.value,
      optional: optional.current.value
    };

    axios.post("http://localhost:4000/user", payload)
    .then(() => {
        navigate("/add-user");

    })

  }

  return (
    
    <Container className='mt-2'>
        <Row>
            <Col className="col-md-8 offset-md-2">
                <legend>Add New User</legend>
                <Form.Group className="mb-3" controlId="formfiestname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" ref={firstname}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formlastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" ref={lastname}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formemail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formmobile">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control type="text" ref={mobileno}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formoptional">
                <Form.Label>Optional</Form.Label>
                <Form.Control type="text" ref={optional}/>
                </Form.Group>

                <Button variant='primary' type='button' onClick={addUserHandler}>Add New User</Button>
            </Col>
        </Row>

    </Container>
  )
}

export default AddUser;
