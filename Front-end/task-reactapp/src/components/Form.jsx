import React from 'react';

function Form() {
    
  return (
    
    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='input-type'>
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <input type='text' name='firstname' className='border w-full px-5 py-3 focus:outline-none rounded-md' placeholder='Enter your first name' />
        </div>
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <input type='text' name='lastname' className='border w-full px-5 py-3 focus:outline-none rounded-md' placeholder='Enter your last name' />
        </div>
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <input type='email' name='email' className='border w-full px-5 py-3 focus:outline-none rounded-md' placeholder='Enter your email' />
        </div>
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <input type='text' name='mobileno' className='border w-full px-5 py-3 focus:outline-none rounded-md' placeholder='Enter your Mobile No' />
        </div>
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <input type='text' name='optional' className='border w-full px-5 py-3 focus:outline-none rounded-md' placeholder='Optional' />
        </div>
        
      </div>

      <button style={{ width: '100%', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', backgroundColor: '#008000', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
        Add
      </button>
    </form>
  )
}

export default Form;
