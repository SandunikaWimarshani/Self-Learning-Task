// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container ,Row, Col, Button} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// // import { useNavigate } from 'react-router-dom';

// // const navigate = useNavigate(); 

// export const List = () => {

// const [list, setList] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:4000/user")
// .then((response) => {
//  setList(response.data)

// });

// } ,[]);


  
//   return (
//     <>
//     <Container>
//       <Row>
//         <Col className='col-md-4 offset-md-4'>
//           {/* <Button variant='primary' type="button" onClick={() => {navigate("/update")}}></Button> */}
//         </Col>
//       </Row>
//     <table className="table">
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Mobile No</th>
//               <th>Optional</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {list.map((user) => (
//               <tr key={user._id}>
//               <td>{user.firstname}</td>
//               <td>{user.lastname}</td>
//               <td>{user.email}</td>
//               <td>{user.mobileno}</td>
//               <td>{user.optional}</td>
//               <td>
//                 {/* Update Icon */}
//                 <Button style={{ cursor: 'pointer', marginRight: '10px', color: 'green' }} variant='primary' type='button' onClick={() =>{
//                   // navigate('/update/${user._id}')
//                 }}></Button>
                
//                 {/* Delete Icon */}
//                 <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer', color: 'red' }} />
//               </td>
//             </tr>

//             ))}
//             {/* Sample data, replace with actual data */}
            
//             {/* Add more rows as needed */}
//           </tbody>
//         </table>
//     </Container>
//     </>
//   )
// }

// export default List;
