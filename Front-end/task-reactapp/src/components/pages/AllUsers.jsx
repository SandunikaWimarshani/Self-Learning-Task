import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const AllUsers = () => {

    const [allUsers, setAllUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/user")
    .then((response) => {
        setAllUsers(response.data)
    });

    }, []);

    
  return (
    <>

    <Container className='mt-2'>
        {/* <Row>
            <Col className="col-md-4 offset-md-4">
                <Button variant='primary' type='button' onClick={navigate("/all-user")}>Add new user</Button>
            </Col>
        </Row> */}
    <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mobile No</th>
          <th>Optional</th>
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
          </tr>

        ))}
        
        
      </tbody>
    </Table>

    </Container>
    
    </>
  )
}

export default AllUsers