import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid text-white bg-secondary mt-5 ">
            <div className="row justify-content-center">

                <div className="col-xs-12 col-sm-6 col-md-3 rounded-lg m-1 shadow-lg ">
                     <h6>Get the latest Rarible updates</h6>
                     <input type="email" className="input-form" placeholder="Your email" style={{borderRadius: "48px"}} />
                </div>

                <div className="col-xs-12 col-md-2 rounded-lg m-1 shadow-lg">
                    <h6>Get the latest Rarible updates</h6>
                    <p>Explore</p>
                    <p>How it wordk</p>
                </div>

                <div className="col-xs-12 col-md-2 rounded-lg m-1 shadow-lg">
                    <h4>Artist</h4>  
                    <p>Rejoignez nous</p>
                </div>

                <div className="col-xs-12 col-md-3 rounded-lg m-1 shadow-lg">
                    <h4>Artist</h4>  
                    <p>Rejoignez nous</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
