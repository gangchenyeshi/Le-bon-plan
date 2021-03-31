import React, { useEffect, useState } from "react";

const ProductsList = () => {
    const [products, SetProducts] = useState([]);

    useEffect(() => {
        fetch(
            `http://localhost:8000/`
        )
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                SetProducts(response.results);
            });
    }, []);

    return (

        <div className="row">
            <h1>Product List</h1>
            {products.map((product) => {
                return (
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        {product}
                    </div>
                );
            })}
        </div>
    );
};




export default ProductsList;