import React, { useState, useEffect } from 'react'
import { currentUser } from '../../util/currentUser';
import swal from 'sweetalert';

import axios from 'axios'
import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    useEffect(() => {
        if (currentUser) {
            window.location.href = "/"
        }
    }, [])

    async function loginUser() {
        const response = await axios.post('/login', {
            email: email,
            password: password,
        })
        console.log(response.data)
        if (response.data.success) {
            await swal({
                title: "Success",
                text: response.data.message,
                icon: "success",
                button: "Aww yiss!",
            });
            localStorage.setItem('currentUser', JSON.stringify(response.data.data));
            window.location.href = "/"
        }
        else {
            await swal({
                title: "Error",
                text: response.data.message,
                icon: "error",
                button: "Try Again!",
            });
            setEmail("")
            setPassword("")
            localStorage.removeItem('currentUser');
        }
    }

    return (
        <div>
            <div className='row'>
                <div className='col-lg-6 mt-5 '>
                    <div className='mx-5'>
                        <h1 className='login-left-row-heading'>Own <span className='overligh'>NotesWala</span></h1>
                        <span className='description-left-row-log'>Thank You For Visiting  Our Website🧡 <br></br>
                            “The reading of all good books is like conversation with the finest (people) of the past centuries.” - Descartes</span>
                    </div>
                    <img className='image-log-leftrow mx-5' src="https://img.freepik.com/free-vector/kids-reading-concept-illustration_114360-8513.jpg" alt='' />
                </div>

                <div className='col-lg-6 mt-4'>
                    <div className='form-container '>
                        <span className='my-elemen display-5'><img className='image-wel' src='https://thumbs.dreamstime.com/b/hand-book-logo-illustration-art-background-43965136.jpg' alt='' /> Welcome</span>
                        <form>

                            <div>
                                <label className='lbl-1' htmlFor='name'>Email :</label>
                                <input type='email' id='email' placeholder='Enter Email' className='user-input'
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <label className='lbl-1' htmlFor='password'>Password:</label>
                                <div className='password-input-container'>
                                    <input type={passwordVisible ? 'text' : 'password'} id='password' placeholder='Enter Password' className='user-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <button type='button' className='show-password-btn' onClick={() => setPasswordVisible(!passwordVisible)} >
                                        {passwordVisible ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                                    </button>
                                </div>
                            </div>


                            <div>
                                <button type='button' className='login-button btn btn-outline-warning  mt-4' onClick={loginUser}>Login 💨</button>
                            </div>

                            <div className="not-signup-btn-container">
                                <span className='notac'>Not have an acount ?
                                  <button className="not-signup-btn"> <Link to='./../Signup'> Signup here...</Link></button></span>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Login