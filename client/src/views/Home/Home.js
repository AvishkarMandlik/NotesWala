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


            {/* landing page */}
            <div className='row landing-page'>
                <div className='col-md-12 text-center mt-2'>
                    <span className='landing-head'>Who Are We ? </span> <br></br>
                    <span className='landing-info'>We Are here to provide you Quality of Notes for Quality Future <br></br>
                        and also helps you for your Examinations and many competitive exams.</span>
                </div>
            </div>




        </div>

    )
}

export default Home