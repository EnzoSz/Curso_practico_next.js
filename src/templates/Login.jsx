import React, { useRef } from "react";
import '../styles/Login.scss';

const Login = ()=> {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usenanme : formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }    
    return (
        <div className="Login">
            <div className="Login-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
    
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new passwrd for yue account</p>
    
                <form action="/" className="form" ref={form}>
                    <label htmlFor="email"className="label">Email addres</label>
                    <input type="text" name="email"placeholder="platzi@example.com" className="input input-email"/>
                    <label for="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" />
                    <button type="submit" onClick={handleSubmit} className="primary-button login-button">
                    Log in
                    </button>
                    <a href="/">Forgot my password</a>
                </form>
                <button className="secondary-button signup-button" >Sign up</button>
            </div>
        </div>
    );
}

export default Login;