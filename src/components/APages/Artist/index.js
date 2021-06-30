import React from 'react'
import { Link } from 'react-router-dom' ;
import './Artist.css'
import undraw_authentication from '../../../assets/undraw_authentication.svg' ;
import undraw_Sign_in from '../../../assets/undraw_Sign_in.svg' ;

const index = () => {
    return (
        <div className="container">

            <div className="row justify-content-center">
                <div className="col-md-10 col-sm-12 p-3">
                    <h1 className="my-4">Artist </h1>
                    <p className="text-secondary h5">Welcome in a new world</p>
                </div>
            </div>

            <div className="row justify-content-center">

                <div className="col-md-5 col-sm-12 rounded-spe p-4 m-1" style={{height: "300px"}}>
                    <Link to="/signup">
                        <h3 className="text-dark">Sign Up</h3>
                        <figure className="text-center">
                            <img src={undraw_Sign_in} height="200px" alt="" />
                        </figure>
                    </Link>
                </div>

                <div className="col-md-5 col-sm-12 rounded-spe p-4 m-1" style={{height: "300px"}}>
                    <Link to="/signin">
                        <h3 className="text-dark">Sign In</h3>
                        <figure className="text-center">
                            <img src={undraw_authentication} height="220px" alt="" />
                        </figure>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default index
