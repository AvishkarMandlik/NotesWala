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


            {/* description */}
            <div className='row bg-light'>
                <div className='col-md-6 pt-5 px-5'>
                    <h2 className='about-heading'>Our Vision</h2>
                    <span className='information-bot'>We are provided previous question papers. <br></br>
                        You Can Practice M.C.Q. Questions As Well As Theory Questions For Your Examination.
                        All Previous Past 10 Year Questions With Their Correct Answer.</span> <br></br>
                    <img className='mt-3' src="https://noteswala.online/wp-content/uploads/2022/06/kph-2.ico" alt=""></img> <br></br> <br></br>
                    <img className='mt-3' src="https://noteswala.online/wp-content/uploads/2022/06/kph-1.ico" alt=""></img>
                </div>
                <div className='col-md-6 pt-5 px-5'>
                    <h4>Notes For BCS</h4>
                    <h4><span className='colo'>100+</span> Questions For Operating System</h4>
                    <span className='information-bot'>You Can Get Free Previous Year Questions For Practice for your University examinations.</span> <br></br> <br></br>
                    <h4><span className='colo'>100+</span> Questions For Therotical Computer Science</h4>
                    <span className='information-bot'>You Can Get Free Previous Year Questions For Practice for your University examinations.</span> <br></br> <br></br>
                    <h4><span className='colo'>100+</span> Questions For Software Testing</h4>
                    <span className='information-bot'>You Can Get Free Previous Year Questions For Practice for your University examinations.</span>
                </div>
            </div>


        </div>

    )
}

export default Home