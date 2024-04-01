import axios from 'axios';
import React, { useState } from 'react'

// This componet handles login process of a user
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword2] = useState('');

    // handle user login
    const handleLogin = async (e) => {
        e.preventDefault();
  
        try{
            
            const response = await axios.post('http://localhost:8080/auth/generateToken',{username, password});
  
            if(response.status===200){
              
              // Store key locally
              localStorage.setItem('token', response.data.token);

            //   console.log(localStorage.getItem('token'));
  
            //   Move to the "/allProducts" route
              window.location.href = '/allProducts';
              
  
            }
            
            else{
              alert("Not found");
            }
            
  
        }
        catch(error){
            console.log(error.response.data.message);
            alert("Wrong username or password, kindly retry");
        }
    }

    // jsx for login ui
  return (
    <div>
        {/* This is a card that will be used to allow for user login, details included 
        are: username which is of name type and password and its confirmation which must match which 
        are both of the password type */}
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a className="navbar-brand btn btn-primary text-light" href="/">Register</a>

                <a className="navbar-brand btn btn-primary text-light" href="/login">Login</a>
                
                
                
                </div>
            </div>
        </nav>

        <div class="d-flex justify-content-center mt-5">
            <div className="card" style={{ width: '30rem' }} >
                <div className="card-body">
                    <h5 className="card-title">Login</h5>

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input
                                type="name"
                                className="form-control"
                                name="username"
                                value={username} onChange={(e) => setUsername(e.target.value)} required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password2"
                                value={password} onChange={(e) => setPassword2(e.target.value)} required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
