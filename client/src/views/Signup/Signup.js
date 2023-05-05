import React, { useState, useEffect } from 'react'
import { currentUser } from '../../util/currentUser';
import swal from 'sweetalert';

import axios from 'axios'
import "./Signup.css"

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('user')

    useEffect(() => {
        if(currentUser){
            window.location.href="/"
        }
    },[])

    async function signupUser() {
        const response = await axios.post('/signup', {
            name: name,
            email: email,
            phone: phone,
            password: password,
            role: role
        })
        console.log(response.data)
        if (response.data.success) {
            await swal({
                title: "Success",
                text: response.data.message,
                icon: "success",
                button: "Aww yiss!",
              });
            window.location.href = '/login'
        }
        else {
            swal({
                title: "Error",
                text: response.data.message,
                icon: "error",
                button: "Try Again!",
              });
            setName('')
            setEmail('')
            setPassword('')
            setPhone('')
        }
    }

    return (
        <div>

            <div className='row'>
                <div className='col-lg-6 mt-5 '>
                    <div className='mx-5'>
                        <h1 className='signup-left-row-heading'>Get your <span className='overlight'>Notes</span> Today</h1>
                        <span className='description-left-row-sgn'>"“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” - George R.R. Martin</span>
                    </div>
                    <img className='image-sgn-leftrow mx-5' src="https://img.freepik.com/free-vector/reading-book-illustration_114360-8532.jpg" alt='' />
                </div>

                <div className='col-lg-6 mt-4 '>
                    <div className='form-container '>
                        <span className='my-element display-5 '><img className='image-wel' src='https://thumbs.dreamstime.com/b/hand-book-logo-illustration-art-background-43965136.jpg' alt='' /> Welcome</span>
                        <form>
                            <div>
                                <label className='lbl' htmlFor='name'>Full name :</label>
                                <input type='text' id='name' placeholder='Enter Name' className='user-input'
                                    value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div>
                                <label className='lbl' htmlFor='name'>Email :</label>
                                <input type='email' id='email' placeholder='Enter Email' className='user-input'
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <label className='lbl' htmlFor='name'>Phone :</label>
                                <input type='text' id='phone' placeholder='Enter Phone' className='user-input'
                                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>

                            <div>
                                <label className='lbl' htmlFor='name'>Password :</label>
                                <input type='password' id='password' placeholder='Enter Password' className='user-input'
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div>
                                <button type='button' className='signup-button  mt-4' onClick={signupUser}>Signup 💨</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Signup