import React, { useEffect,useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const Navbar = () => {
  const context = useContext(noteContext);
  const {isconnect,setIsConnect } = context;
  
  let location = useLocation();
  useEffect(() => {}, [location]);

  const signout =()=>{
    setIsConnect(false);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
                {isconnect ? <button className="btn btn-outline-info ml-2" onClick={signout}>Sign out</button>
                 : 
                (location.pathname !== "/login" ? 
                <Link to="/login"  className="btn btn-outline-info ml-2">login</Link>
                :
                <Link to='/signup' className="btn btn-outline-info ml-2">Sign up</Link>
                )
                }
            </form>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
