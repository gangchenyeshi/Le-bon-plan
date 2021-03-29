import React, { } from "react";
import { Link, } from "react-router-dom";

const Admin = () => {
    
    return (
        <div>
            <h1>Admin Page</h1>

            <Link to="/admin/products">Add Product</Link>
        </div>
    )

}

export default Admin;