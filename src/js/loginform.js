import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



const LoginForm = () => {
    let history = useHistory();
    return (
        <div className="cover">
            <h1>WELCOME <br></br> BACK!</h1>
            <input type= "text" class="text" placeholder= "Email/Username" />
            <input type= "password" class="password" placeholder= "Password" />
            <div className="login-btn" onClick={() =>{history.push('/home')}}>
                Login
            </div>
            <p className="forgotpass">{/*Forgot Password?*/}</p>
            <p className="donthaveanacc">Don't have an account? </p>
            <p className="signup"><Link to='/signup'>SignUp</Link></p>
        </div>
    )
}

export default LoginForm 