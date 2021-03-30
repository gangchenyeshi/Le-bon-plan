import React, { } from "react";
import { Link, } from "react-router-dom";

const Admin = () => {

    return (
        <div>
            <h1>Admin Page</h1>
            <Link to="/admin/products/add"><button class="btn btn-outline-success" type="button">Add Product</button></Link>
        </div>
    )

}

export default Admin;