import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

// This component deals with registration of a user
const Register = () => {
    const [name, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password, setPassword2] = useState('');
    const [error, setError] = useState(null);

    // function to handle registartion on form submission
    const handleRegistration = async (e) => {
        e.preventDefault();

        try{
            if(password !== password1){
                alert("passwords must match");
                navigate(<Register />)
                return null;
            }
            const response = await axios.post('http://localhost:8080/auth/addNewUser',{name, password});

            console.log("sir");
            const {token} = response.data;

            //storing token locally
            localStorage.setItem('token', token);
            console.log(token);

            // Move to the "/allProducts" route
            window.location.href = '/login';
        }
        catch(error){
            setError(error.response.data.message);
            console.log(error.response.data.message);
            alert("User already exists! kindly login");

            // Move to the "/allProducts" route
            window.location.href = '/login';
        }
    }

    const navigate = useNavigate();

  return (
    <div>

        {/* This is a card that will be used to allow for registration of users, details included 
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
                    <h5 className="card-title">Register</h5>

                    <form onSubmit={handleRegistration}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input
                                type="name"
                                className="form-control"
                                name="username"
                                value={name} onChange={(e) => setUsername(e.target.value)} required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password1"
                                value={password1} onChange={(e) => setPassword1(e.target.value)} required
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
                        {error && <div>{error}</div>}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

       
    </div>
  )
}

export default Register
