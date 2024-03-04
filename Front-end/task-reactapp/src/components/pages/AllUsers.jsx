import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'; // Importing icons
import DeleteUser from './DeleteUser';

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [itemIDToDelete, setItemIDToDelete] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:4000/user")
            .then((response) => {
                setAllUsers(response.data)
            });
    }, []);

    const openDeleteModalHandler = (id) => {
        setItemIDToDelete(id);
        setShowModal(true);
    }

    const closeDeleteModalHandler = () => {
        setShowModal(false);
    }

    const confirmDeleteHandler = () => {
        axios.delete(`http://localhost:4000/user/${itemIDToDelete}`)
            .then((response) => {
                setAllUsers(existingData => existingData.filter(user => user._id !== itemIDToDelete));
                setItemIDToDelete(0);
                setShowModal(false);
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    }

    return (
        <>
            <DeleteUser
                title="Delete User"
                body="Are you sure you want to delete this user?"
                showModal={showModal}
                closeDeleteModalHandler={closeDeleteModalHandler}
                confirmDeleteHandler={confirmDeleteHandler}
            />

            <Container className='mt-2'>
                <Row>
                    <Col>
                        <Table responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Mobile No</th>
                                    <th>Optional</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobileno}</td>
                                        <td>{user.optional}</td>
                                        <td>
                                            <Button variant='primary' type='button' onClick={() => navigate(`/edit-user/${user._id}`)}>
                                                <AiFillEdit /> Edit
                                            </Button>
                                            <Button variant='danger' type='button' onClick={() => openDeleteModalHandler(user._id)}>
                                                <AiFillDelete /> Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AllUsers;
