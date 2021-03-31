import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cities from '../components/City';


const Navbar = () => {
  const [user, setUser] = useState("");



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
                  <li>
                    <Link to="/products/cities/:city" class="dropdown-item">
                      <Cities city={"Paris"}></Cities>
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/cities/:city" class="dropdown-item">
                      <Cities city={"Lyon"}></Cities>
                    </Link>
                  </li> 
                  <li>
                    <Link to="/products/cities/:city" class="dropdown-item">
                      <Cities city={"Marseille"}></Cities>
                    </Link>
                  </li>                  

                </ul>
              </li>

            </ul>
            <form class="d-flex">

              {/* <Link to="/login"><button class="btn btn-outline-success" type="submit">Login</button></Link>
              <Link to="/signup"><button class="btn btn-outline-success" type="submit">Signup</button></Link>
              <Link to="/profile"><button class="btn btn-outline-success" type="submit">Profile</button></Link>
              <Link to="/"><button class="btn btn-outline-success" type="submit">Logout</button></Link> */}
              {user && <Link to="/profile"><button class="btn btn-outline-success" type="submit">Profile</button></Link>}
              {user && <Link to="/"><button class="btn btn-outline-success" type="submit">Logout</button></Link>}
              {!user && <Link to="/login"><button class="btn btn-outline-success" type="submit">Login</button></Link>}
              {!user && <Link to="/signup"><button class="btn btn-outline-success" type="submit">signup</button></Link>}
            </form>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar;