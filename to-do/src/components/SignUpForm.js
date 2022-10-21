import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        
        const user = {
            username,
            password
        }
  

        axios.post('http://localhost:5000/users/', user)
         .then(response => {
             console.log(response);
         })
         .catch((error) => {
             console.log(error);
         })

         navigate('/login')

         
    }

    const handleSubmitLogin = e => {
        navigate('/login');
    }

    return (
        <form className="log-in-form" onSubmit={handleSubmit}>
            <div className = "form-inner">
                <h2 className="log-in-header">Sign Up</h2>
                <div className="log-in-div">
                    <div className="form-group">
                        <label htmlFor="name">Username:</label>
                        <input type="text" onChange={e => setUserName(e.target.value)} name="name" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" onChange={e => setPassword(e.target.value)} name="password" id="password"/>
                    </div>  
                    <div className="btn-group2">
                        <button className="btn btn-primary" type="submit"> Sign Up </button>
                        <button onClick={handleSubmitLogin} className="btn btn-success" type="submit"> Log In </button>
                    </div>
                </div>  
            </div>
            
           
            
        </form>
    )
}


export default SignUpForm;