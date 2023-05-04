import React from 'react'
import {Link} from 'react-router-dom';
import { currentUser } from '../../util/currentUser';
import './Navbar.css'
function Navbar() {
    function logOut() {
        localStorage.removeItem('currentUser');
        window.location.href = './login'
    }
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark  bg-secondary">
  <div class="container-fluid">
    <Link class="navbar-brand" >NOTESWALA</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link" href="feature">Features</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Admin">Admin</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Collections
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link to="/FyPdfsList" class="dropdown-item" >FyPdfsList</Link></li>
            <li><Link to="/SyPdfsList" class="dropdown-item">SyPdfsList</Link></li>
            <li><Link to="/TyPdfsList" class="dropdown-item" >TyPdfsList</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <h4 className='m-2' style={{color: 'black',fontSize: '25px'}}>{currentUser?.name}</h4>
    <button type="button" className='btn btn-success' onClick={logOut}>Logout</button>

  </div>
</nav>
    </div>
  )
}

export default Navbar