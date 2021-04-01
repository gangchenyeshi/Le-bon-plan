import React, { } from "react";
import { Link, } from "react-router-dom";

const Admin = () => {

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-10">
                    <div>
                        <h1>Admin Page</h1>
                        <Link to="/admin/products/add"><button class="btn btn-outline-success" type="button">Add Product</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Admin;