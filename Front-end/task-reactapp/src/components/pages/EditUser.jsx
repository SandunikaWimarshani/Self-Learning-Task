import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobileno: '',
        optional: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:4000/user/${id}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [id]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:4000/user/${id}`, userData)
            .then(() => {
                setSuccessMessage('User updated successfully!');
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/all-user'); // Redirect to all-user page after updating
                }, 3000);
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    };
    
    return (
        <div className="container-fluid">
            <Row className="justify-content-center">
                <Col md={8}>
                    <legend>Update User</legend>
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    <Form.Group className="mb-3" controlId="formFirstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstname" value={userData.firstname} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastname" value={userData.lastname} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={userData.email} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMobile">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control type="text" name="mobileno" value={userData.mobileno} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formOptional">
                        <Form.Label>Optional</Form.Label>
                        <Form.Control type="text" name="optional" value={userData.optional} onChange={handleInputChange} />
                    </Form.Group>

                    <Button variant='primary' type='button' onClick={handleUpdate}>Update</Button>
                </Col>
                
            </Row>
        </div>
    );
};

export default EditUser;
