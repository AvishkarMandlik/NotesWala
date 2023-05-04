import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { currentUser } from '../../util/currentUser';

import './Home.css'
import { Link } from 'react-router-dom';


function Home() {


   


    if (!currentUser) {
        window.location.href = './login'
    }

    return (
        <div>
             <Navbar user={currentUser?.name} />
           
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



            {/* featured collections */}
            <div className='row' id='feature'>
                <h1 className='about-heading mt-5'>Featured Collections</h1>
                <div className='col-md-4'>
                    <div className="container">
                        <div className="mobile-layout">
                            <div className="actions">
                                <i className="fas fa-chevron-left"></i>
                          <Link to="/FyPdfsList"> <button type="button" class="btn btn-success">VIEW ALL</button></Link> 
                            </div>
                            <div className="book-cover">
                                <img className="book-top"
                                    src="https://image.slidesharecdn.com/aslevel-1-150815105029-lva1-app6891/95/as-level-computer-science-book-1-1-638.jpg?cb=1439636192"
                                    alt="book-top" />
                                <img className="book-side"
                                    src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg"
                                    alt="book-side" />
                            </div>
                            <div className="preface">
                                <div className="content">

                                    <div className="header">
                                        <div className="title">FYBSC Computer Science</div>
                                        <div className="icon">
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p>Here all FYBSC computer science subjects pdf's are available by there semesterwise.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="container">
                        <div className="mobile-layout">

                            <div className="actions">
                                <i className="fas fa-chevron-left"></i>
                                <Link to="/SyPdfsList"> <button type="button" class="btn btn-success">VIEW ALL</button></Link> 
                            </div>
                            <div className="book-cover">
                                <img className="book-top"
                                    src="https://www.ibbookshop.co.uk/wp-content/uploads/2017/03/9781471542091.jpg"
                                    alt="book-top" />
                                <img className="book-side"
                                    src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg"
                                    alt="book-side" />
                            </div>
                            <div className="preface">
                                <div className="content">
                                    <div className="header">
                                        <div className="title">SYBSC Computer Science</div>
                                        <div className="icon">
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p>Here all SYBSC computer science subjects pdf's are available by there semesterwise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="container">
                        <div className="mobile-layout">

                            <div className="actions">
                                <i className="fas fa-chevron-left"></i>
                                <Link to="/TyPdfsList"> <button type="button" class="btn btn-success">VIEW ALL</button></Link> 
                            </div>
                            <div className="book-cover">
                                <img className="book-top"
                                    src="https://www.ibbookshop.co.uk/wp-content/uploads/2017/09/9781471552335.jpg"
                                    alt="book-top" />
                                <img className="book-side"
                                    src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg"
                                    alt="book-side" />
                            </div>
                            <div className="preface">
                                <div className="content">
                                    <div className="header">
                                        <div className="title">TYBSC Computer Science</div>
                                        <div className="icon">
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p>Here all TYBSC computer science subjects pdf's are available by there semesterwise.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* information */}

            <div className=' row vision bg-light'>
                <div className='col-md-6 text-center px-5 pt-5'>
                    <h1 className='text-center about-heading'>Study Material For Your Examinations.</h1> <br></br>
                    <span className='information-bot'>Here You Can Get Free Notes Of All Courses All Subjects i.e Notes for BSC Computer Science,
                        BSC, BA, BCA Just Click By Once & Get All Subjects & Chapters PDF's.
                        You Can Do Revision For your Examinations A Day Before Your Exams.
                    </span>
                </div>
                <div className='col-md-6 text-center mt-5 mb-5'>
                    <img src="https://img.freepik.com/free-vector/online-library-app-reading-banner_33099-1733.jpg" height="300px" alt=""></img>
                </div>
            </div>

            {/* about-us */}
            <div className='row about-us'>
                <h1 className='about-heading'>About Us</h1>
                <div className='col-md-4'>
                    <div className="wrapper">
                        <div className="img-area">
                            <div className="inner-area">
                                <img src="https://github.com/avishkarmandlik.png" alt=""></img>
                            </div>
                        </div>
                        
                        <div className="name">Avishkar Mandlik</div>
                        <div className="about">Designer & Developer</div>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/avishkarmandlik" className="fb"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/avishkarmandlik" className="twitter"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com//avishkarmandlik" className="insta"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.github.com//avishkarmandlik" className="yt"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                <div className="wrapper">
                        <div className="img-area">
                            <div className="inner-area">
                                <img src="https://github.com/anikettikkal.png" alt=""></img>
                            </div>
                        </div>
                        
                        <div className="name">Aniket Tikkal</div>
                        <div className="about">Designer & Developer</div>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/anikettikkal" className="fb"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/anikettikkal" className="twitter"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/anikettikkal" className="insta"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.github.com/anikettikkal" className="yt"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                <div className="wrapper">
                        <div className="img-area">
                            <div className="inner-area">
                                <img src="https://github.com/vishalgaikwad11.png" alt=""></img>
                            </div>
                        </div>
                        
                        <div className="name">Vishal Gaikwad</div>
                        <div className="about">Designer & Developer</div>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/vishalgaikwad" className="fb"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/vishalgaikwad" className="twitter"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/vishalgaikwad11" className="insta"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.github.com/VishalGaikwad11" className="yt"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>

  
            {/* sliding-images */}
            <div className='sliding-img '>

            </div>

        </div>

    )
}

export default Home