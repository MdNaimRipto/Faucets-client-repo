import React from 'react';
import { AiFillEyeInvisible } from "react-icons/ai"
import { Link } from 'react-router-dom';
import PopupLogin from './PopupLogin';

const Login = () => {
    return (
        <div className='login-container'>
            <div className='login-form'>
                <div className='login'>
                    <h2>Login</h2>
                    <form>
                        <div className="inputGroup">
                            <label for="Email">Email</label>
                            <input type="email" name="email" placeholder="Enter Your Email" />
                        </div>
                        <div className="inputGroup">
                            <label for="Password">Password</label>
                            <input type="password" name="password" placeholder="Enter Your Password" />
                            <AiFillEyeInvisible className='show-password' />
                        </div>
                        <div className="inputGroup">
                            <button type="submit">login</button>
                        </div>
                    </form>
                    <div className='login-footer'>
                        <p className='switch'>Don't have an account?
                            <Link to="/register">Signup</Link>
                        </p>
                        <div className='social-section'>
                            <p>Or</p>
                            <PopupLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;