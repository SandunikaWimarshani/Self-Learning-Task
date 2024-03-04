// import axios from 'axios';
// import React, { useRef } from 'react'
// import { Container , Row, Col} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';


// export const Form = () => {

//   const firstname = useRef('');
//   const lastname = useRef('');
//   const email = useRef('');
//   const mobileno = useRef('');
//   const optional = useRef('');

//   const navigate = useNavigate();

//   const FormHandler = () => {
//     let payload = {
//       firstname: firstname.current.value,
//       lastname: lastname.current.value,
//       email: email.current.value,
//       mobileno: mobileno.current.value,
//       optional: optional.current.value
//     };

//     axios.post("http://localhost:4000/user", payload)
//     .then(() => {
//       navigate("/");

//     })

//   }

//   return (

//     <>
//     <Container className='mt-2'>
//       <Row>
//         <Col className='col-md-8 offset-md-2'>
//           <legend>Add New User</legend>
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
//     onclick={FormHandler}>
    
//       Add
//     </button>
//   </form>

            
//         </Col>
//       </Row>

//     </Container>
    
//     </>
  
//   )
// }

// export default Form;
