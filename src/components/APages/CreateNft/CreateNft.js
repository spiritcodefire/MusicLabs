import React from 'react'
import { Link } from 'react-router-dom' ;
import './CreateNft.css'
import Undraw1 from '../../../assets/undraw1.svg' ;
import Undraw2 from '../../../assets/undraw3.svg' ;
const CreateNft = () => {
    return (
        <div className="container">

            <div className="row justify-content-center">
                <div className="col-md-10 col-sm-12 p-3">
                    <h1 className="my-4">Create</h1>
                    <p className="text-secondary h5">Choose “Single” if you want your collectible to be one of a kind or “Album” if you want to sell one collectible multiple times</p>
                </div>
            </div>

            <div className="row justify-content-center">

                <div className="col-md-5 col-sm-12 rounded-spe p-4 m-1" style={{height: "300px"}}>
                    <Link to="/createsingle">
                        <h3 className="text-dark">Single</h3>
                        <figure className="text-center">
                            <img src={Undraw1} height="220px" alt="" />
                        </figure>
                    </Link>
                </div>

                <div className="col-md-5 col-sm-12 rounded-spe p-4 m-1" style={{height: "300px"}}>
                    <Link to="/createalbum">
                        <h3>Album</h3>
                        <figure className="text-center">
                            <img src={Undraw2} height="200px" alt="" />
                        </figure>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default CreateNft
