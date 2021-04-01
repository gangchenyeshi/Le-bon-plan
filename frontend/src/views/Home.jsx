import React from "react";
import Cities from '../components/City';
import { Link } from "react-router-dom";

// import Taiwan from "@svg-maps/taiwan";
// import { SVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";

const Home = () => {

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-10">
                    <div>
                        <h1>Le Bon Plan</h1>

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
                    {/* <div>
                        {<SVGMap map={Taiwan} /> }
                    </div> */}
                </div>
            </div>
        </div>
                        
        
    )

}

export default Home;