import React, { } from "react";


const Profile = () => {

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-10 col-md-8 col-lg-8 ">


                    <div className="card-group card">
                        <div className="card">
                            <h5 className="card-title">Profile</h5>
                            <div>
                                {/* <img className="card-img-top"
                        src=""
                        alt="Profile image" /> */}
                            </div>

                            <div className="card-body">

                                <p className="card-text">Email : </p>
                                <p className="card-text">FirstName : </p>
                                <p className="card-text">SurName : </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Profile;