import React from 'react'
import { currentUser } from '../../util/currentUser';
import './Home.css'


function Home() {


    function logOut() {
        localStorage.removeItem('currentUser');
        window.location.href = './login'
    }

    if (!currentUser) {
        window.location.href = './login'
    }

    return (
        <div>
            <h1 className='text-center'>Home</h1>
            <h2>{currentUser?.name}</h2>

            <button type="button" className='btn btn-success' onClick={logOut}>Logout</button>

            {/* heading names */}
            <div className='heading text-center'>
                <span className='main-heading'>BCS NOTESWALA</span> <br></br>
                <span className='main-head-2'>Welcome To Our</span> <button className='btn-wel'>World of Notes</button>
            </div> <br></br>


           
        </div>

    )
}

export default Home