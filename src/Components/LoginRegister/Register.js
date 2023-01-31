import React from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PopupLogin from './PopupLogin';

const Register = () => {
    return (
        <div className='register-container'>
            <div className='register-form'>
                <div className='register'>
                    <h2>Sign Up</h2>
                    <form>
                        <div className="inputGroup">
                            <label for="Email">Name</label>
                            <input type="text" name="name" placeholder="Enter Your Name" />
                        </div>
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
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>
                    <div className='register-footer'>
                        <p className='switch'>Already have an account?
                            <Link to="/login">Login</Link>
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

export default Register;