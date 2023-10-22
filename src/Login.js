import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from "react-icons/ri";
import './Login.css'
import Registration from './Registration';


import { Modal } from 'react-responsive-modal';

const Login = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className='container'>
            <div className='loginHeader'>
                Login Here
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='txtinput'>
                    <MdEmail className='icon' />
                    <input type="email" placeholder='Email' />
                </div>
                <div className='txtinput'>
                    <RiLockPasswordFill className='icon' />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="forgot-password">
                Lost Password?
                <span>Click Here!</span>
            </div>
            <div className='submitBtns'>
                <div className='loginBtn'>
                    <button className='login'>Login</button>
                </div>
                <div className='signupBtn'>
                    <button onClick={onOpenModal}>SignUp</button>
                </div>
            </div>
            <Modal styles={{ modal: { background: 'linear-gradient(#CDE7FF, white)' } }} open={open} onClose={onCloseModal} center>
                <Registration />
            </Modal>
        </div>
    );
};

export default Login;
