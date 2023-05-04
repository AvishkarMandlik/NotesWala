import React from 'react'
import { Link } from 'react-router-dom'

import "./Footer.css";
function Footer() {
  return (
    <>
         <div class="footer-container" id="call-us">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 text-center">
                    <img class="footer-logo" src="./img/logo-img.png" alt="png"/>
                    <h4 className='about-heading'>Bcs Noteswala</h4>
                    <div class="footer-social-media ">
                        <Link href="#"><i class="fab fa-github p-3"></i></Link>
                        <Link href="#"><i class="fab fa-linkedin-in p-3"></i></Link>
                        <Link href="#"><i class="fab fa-twitter p-3"></i></Link>
                        <Link href="#"><i class="fab fa-instagram p-3"></i></Link>
                    </div>
                </div>
                <div class="col-md-2">
                    <span>Quick Links</span>
                    <div class="footer-border"></div>
                    <div class="navigate-content">
                        <Link to="/"><button>Home</button></Link>
                        <Link to="/FyPdfsList"><button className='QuickLinks-btn'>FyPdfsList</button></Link>
                        <Link to="/SyPdfsList"><button className='QuickLinks-btn'>SyPdfsList</button></Link>
                        <Link to="/TyPdfsList"><button className='QuickLinks-btn'>TyPdfsList</button></Link>
                    </div>
                </div>
                <div class="col-md-3">
                    <span>Contact us</span>
                    <div class="footer-border"></div>
                    <div class="navigate-content">
                        <i className="fa-solid fa-location-dot navigate-content-word">&nbsp; &nbsp;Rahuri, Maharashtra</i>
                        <i className="fa-solid fa-phone navigate-content-word">&nbsp; &nbsp;+91-9370286362</i>
                        <i className="fa-solid fa-envelope navigate-content-word">&nbsp; &nbsp;mandlikavi121@gmail.com</i>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <span>Our Newsletter</span>
                    <div class="footer-border"></div>
                    <p class="newsletter-des">Enter your email to get our news and updates.</p>
                    <form action="" class="new-letter-form">
                        <input type="email" class="email-holder" placeholder="Enter your Email" />
                        <input type="submit" class="submit-btn" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Footer