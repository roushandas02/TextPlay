import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Logo from './images/favicon.ico'

const Navbar = () => {
  let navigate = useNavigate();
//   const handleLogout= () =>{
//     localStorage.removeItem('token');
//     navigate("/login");
//   }
function handleDarkMode(){
     
}
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
             <img className="rounded-circle" height="30px" width="30px" src={Logo} alt="not found" />
            <Link className="navbar-brand" to="/">  TextPlay</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/typespeed">Typespeed</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/textarea">Textarea</Link>
                </li>
                
                {/* <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
                </li> */}
            </ul>
            {/* </ul>
            {!localStorage.getItem('token')?<form className="d-flex" role="search">
            <Link type="button" to="/login" className="btn btn-outline-success mx-2">Log In</Link>
            <Link type="button" to="/signup" className="btn btn-outline-success mx-2">Sign Up</Link>
            </form>: <button onClick={handleLogout} className="btn btn-primary">Log Out</button>} */}
            </div>
            <div className="form-check form-switch text-white">
                <input className="form-check-input" onClick={handleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" data-toggle="tooltip" data-placement="bottom" title="Currently Unavailable"/>
                <label className="form-check-label" onClick={handleDarkMode} for="flexSwitchCheckDefault"  data-toggle="tooltip" data-placement="bottom" title="Currently Unavailable" >Dark Mode</label>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
