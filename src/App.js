import { Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import NavBar from './components/NavBar';
import Register from './components/Register';
import axios from 'axios';
import Login from './components/Login';


// Set base URL for Axios
axios.defaults.baseURL = 'http://localhost:8080/';

function App() {
  return (
    <div>
      {/* <NavBar />
      <Register />  
      <AllProducts />  */}

      <Routes>
        <Route path='/' element = {
          <>
            <Register />
          </>
        } />

        <Route path='/login' element = {
          <Login />

        } />

        <Route path='/allProducts' element={
          <>
            <NavBar />
            <AllProducts />
          </>
          
        } />
      </Routes>  
      
    </div>
    
  );
}

export default App;






