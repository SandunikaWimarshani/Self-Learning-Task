import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import AllUsers from './components/pages/AllUsers';
import AddUser from './components/pages/AddUser';
import EditUser from './components/pages/EditUser';
// import List from './components/List';
// import Form from './components/Form';
// import Update from './components/Update'

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/all-user" element={<AllUsers></AllUsers>}></Route>
        <Route path='/add-user' element={<AddUser></AddUser>}></Route>
        <Route path='/edit-user/:id' element={<EditUser></EditUser>}></Route>
        {/* <Route path='/' element={<List/>}></Route>
        <Route path='/form' element={<Form/>}></Route> */}
        {/* <Route path='/update/:id' element={<Update/>}></Route> */}
      </Routes>
    </Layout>
   
      
    </>
  );
}

export default App;
