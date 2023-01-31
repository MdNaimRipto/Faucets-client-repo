import React from 'react';
import { BsFacebook, BsGoogle } from "react-icons/bs"

const PopupLogin = () => {
    return (
        <div className='other-auth'>
            <BsGoogle />
            <BsFacebook />
        </div>
    );
};

export default PopupLogin;