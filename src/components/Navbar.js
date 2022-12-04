import React from 'react';

const Navbar = () => {
    return(
      <>
        <nav className="navbar navbar-expand-lg bg-light ">
          <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-bolder" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-bolder" href="#">tours</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-bolder" href="#">about us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-bolder" href="#">discover</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-bolder" href="#">events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-bolder" href="#">rewards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-bolder" href="#">travel blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase fw-bolder" href="#">contact us</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>  
      </>
    )
}

export default Navbar;