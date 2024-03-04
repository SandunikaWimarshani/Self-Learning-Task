// import axios from 'axios';
// import React, { useEffect, useRef } from 'react'
// import { useParams } from 'react-router-dom';
// import { Container , Row, Col} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// export const Update = () => {

//     const {id} = useParams();
//     const firstname = useRef('');
//     const lastname = useRef('');
//     const email = useRef('');
//     const mobileno = useRef('');
//     const optional = useRef('');

//     useEffect(() => {
//         axios.get('http://localhost:4000/user/${id}')
//         .then((response) => {
//             let data = response.data;
//             firstname.current.value = data.firstname;
//             lastname.current.value = data.lastname;
//             email.current.value = data.email;
//             mobileno.current.value = data.mobileno;
//             optional.current.value = data.optional;

//         })
//     })
//   return (
//     <>
//     <Container className='mt-2'>
//       <Row>
//         <Col className='col-md-8 offset-md-2'>
//           <legend>Update User</legend>
//           <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//     <div className='input-type'>
//       <div style={{ marginBottom: '10px', width: '100%' }}>
//         <input type='text' name='firstname' className='border w-full px-5 py-3 focus:outline-none rounded-md' placeholder='Enter your first name' ref={firstname}/>
//       </div>
//       <div style={{ marginBottom: '10px', width: '100%' }}>
//         <input type='text' name='lastname' className='border w-full px-5 py-3 focus:outline-none rounded-md' placeholder='Enter your last name' ref={lastname} />
//       </div>
//       <div style={{ marginBottom: '10px', width: '100%' }}>
//         <input type='email' name='email' className='border w-full px-5 py-3 focus:outline-none rounded-md' placeholder='Enter your email' ref={email}/>
//       </div>
//       <div style={{ marginBottom: '10px', width: '100%' }}>
//         <input type='text' name='mobileno' className='border w-full px-5 py-3 focus:outline-none rounded-md' placeholder='Enter your Mobile No' ref={mobileno} />
//       </div>
//       <div style={{ marginBottom: '10px', width: '100%' }}>
//         <input type='text' name='optional' className='border w-full px-5 py-3 focus:outline-none rounded-md' placeholder='Optional' ref={optional}/>
//       </div>
      
//     </div>

//     <button style={{ width: '100%', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', backgroundColor: '#008000', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease'}}
//     onclick={() => {}}>
    
//       Update
//     </button>
//   </form>

            
//         </Col>
//       </Row>

//     </Container>
    
//     </>
//   )
// }

// export default Update;
