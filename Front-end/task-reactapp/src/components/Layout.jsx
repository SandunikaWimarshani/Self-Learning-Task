import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import List from './List';
import Form from './Form';

export const Layout = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <nav style={{ backgroundColor: '#343a40', color: 'white', padding: '10px 0' }}>
          <Container>
            <h1 style={{ fontFamily: 'Arial, sans-serif', margin: 0 }}>User Registration System</h1>
          </Container>
        </nav>
      </header>
      <main style={{ flex: 1, backgroundColor: '#f0f0f0', paddingTop: '60px' }}>
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <h1 className='text-center font-bold py-5' style={{ fontFamily: 'Arial, sans-serif' }}>User Registration</h1>
          <div>
            <button onClick={toggleForm} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
              <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '5px' }} />
              Add User
            </button>
          </div>
        </Container>
        {showForm && (
          <div className='container mx-auto py-5'>
            <Form></Form>
          </div>
        )}
        <div className='container mx-auto'>
          <List></List>
        </div>
      </main>
    </div>
  );
}

export default Layout;
