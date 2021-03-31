import React from "react";
import Cities from '../components/City';
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <div>
                <h1>Le Bon Plan</h1>
            </div>
            
            <Link to="/products/cities/:city">
                <Cities city={"Paris"}></Cities>
            </Link>
            <Link to="/products/cities/:city">
                <Cities city={"Lyon"}></Cities>
            </Link>
            <Link to="/products/cities/:city">
                <Cities city={"Marseille"}></Cities>
            </Link>
        </div>

    )

}

export default Home;