import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AddUser = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobileno: '',
        optional: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate(); // Use navigate from React Router

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.mobileno) {
            setError('Please fill in all required fields.');
            return false;
        }
        return true;
    };

    const addUserHandler = () => {
        if (!validateForm()) {
            return;
        }

        axios.post("http://localhost:4000/user", formData)
            .then(() => {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    navigate('/all-user'); // Redirect to all-user page
                }, 3000);
            })
            .catch(error => {
                console.error('Error adding user:', error);
                setError('An error occurred while adding the user. Please try again.');
            });
    };

    return (
        <Container className='mt-2'>
            <Row>
                <Col className="col-md-8 offset-md-2">
                    <legend>Add New User</legend>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">User added successfully!</Alert>}
                    <Form>
                        <Form.Group className="mb-3" controlId="formFirstname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMobile">
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control type="text" name="mobileno" value={formData.mobileno} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formOptional">
                            <Form.Label>Optional</Form.Label>
                            <Form.Control type="text" name="optional" value={formData.optional} onChange={handleInputChange} />
                        </Form.Group>

                        <Button variant='primary' type='button' onClick={addUserHandler}>Add New User</Button>
                        
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddUser;
