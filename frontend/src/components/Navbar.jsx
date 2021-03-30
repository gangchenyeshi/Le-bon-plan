import React, { } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">LBP</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

         
        

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cities
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="#">Paris</Link></li>
                  <li><Link class="dropdown-item" to="/#">Lyon</Link></li>
                  <li><Link class="dropdown-item" to="/#">Marseille</Link></li>
                  
                </ul>
        </li>
               
      </ul>
              <form class="d-flex">
                <Link to="/login"><button class="btn btn-outline-success" type="submit">Login</button></Link>
                <Link to="/signup"><button class="btn btn-outline-success" type="submit">Signup</button></Link>
              </form>
    </div>
  </div>
</nav>
        </div>
    )

}

export default Navbar;