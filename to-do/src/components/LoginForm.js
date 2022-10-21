import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setToken }) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        
        const user = {
            username,
            password
        }

        
       axios.get('http://localhost:5000/users/', user)
       .then(async response => {
           const token = await loginUser(user)
            setToken(token);
            navigate('/books')
       })
       .catch((error) => {
           console.log(error);
       })

    
    }

    const handleSubmitSignUp = e => {
        navigate('/signup');
    }

    return (
        <form className="log-in-form" onSubmit={handleSubmit}>
            <div className = "form-inner">
                <h2 className="log-in-header">Login</h2>
                <div className="log-in-div">
                    <div className="form-group">
                        <label htmlFor="name">Username:</label>
                        <input type="text" onChange={e => setUserName(e.target.value)} name="name" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" onChange={e => setPassword(e.target.value)} name="password" id="password"/>
                    </div>   
                </div> 
                <div className="btn-group2">
                    <button className="btn btn-success" type="submit"> Log In </button>
                    <button onClick={handleSubmitSignUp} className="btn btn-primary" type="submit"> Sign Up </button>
                </div>
            </div>
            

        </form>
    )
}

async function loginUser(credentials) {
    return axios.post('http://localhost:5000/login', credentials)
            .then(response => response.data)
}

export default LoginForm;