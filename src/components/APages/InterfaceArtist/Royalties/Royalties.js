import React from 'react'
import { Link } from 'react-router-dom' ;
import Undraw1 from '../../../../assets/undraw_Gift.svg' ;
import Undraw2 from '../../../../assets/undraw_crownfunding.svg' ;


const Royalties = () => {
    return (
        <div>
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-10 col-sm-12 p-3">
                        <h1 className="my-4">Welcome to your Royalties</h1>
                        <p className="text-secondary h5">Choose what you will do with your royalties</p>
                    </div>
                </div>

                <div className="row justify-content-center">

                    <div className="col-md-5 col-sm-12 rounded-spe p-4 m-1 text-dark" style={{height: "300px"}}>
                        <Link to="/Charity">
                            <h3 className="text-dark">offer them for charities</h3>
                            <figure className="text-center">
                                <img src={Undraw1} height="220px" alt="" />
                            </figure>
                        </Link>
                    </div>

                    <div className="col-md-5 col-sm-12 rounded-spe p-4 m-1 text-dark" style={{height: "300px"}}>
                        <Link to="/Crowdfunding">
                            <h3>Get CrownFunded</h3>
                            <figure className="text-center text-dark">
                                <img src={Undraw2} height="200px" alt="" />
                            </figure>
                        </Link>
                    </div>

                </div>
                </div>
        </div>
    )
}

export default Royalties
