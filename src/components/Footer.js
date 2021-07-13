import React, {useEffect} from 'react';
import { Context } from '../hooks/ContextProvider'

import { Link } from 'react-router-dom' ;

const Footer = () => {
  
    const context = React.useContext(Context)
   

    return (
        <>  
            {!context.NavBar && 
            
                <div className="container-fluid text-dark bg-light mt-5 ">
                    <div className="row justify-content-center">

                        <div className="col-xs-12 col-sm-6 col-md-3 rounded-lg m-1  ">
                            <h6>Get the latest Rarible updates</h6>
                            <input type="email" className="input-form" placeholder="Your email" style={{borderRadius: "48px"}} />
                        </div>

                        <div className="col-xs-12 col-md-2 rounded-lg m-1 ">
                            <h6>Get the latest Rarible updates</h6>
                            <p>Explore</p>
                            <p>How it wordk</p>
                        </div>

                        <div className="col-xs-12 col-md-2 rounded-lg m-1 ">
                            <h4>Legal</h4>  
                            <Link to="/Privacy" className="text-dark">
                                <p>Privacy</p>
                            </Link>
                            <Link to="/Therme" className="text-dark">
                                <p>Therme</p>
                            </Link>
                        </div>

                        <div className="col-xs-12 col-md-3 rounded-lg m-1 ">
                            <Link to="/artist" className="text-dark">
                                <h4>Artist</h4>  
                                <p>Rejoignez nous</p>
                            </Link>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default Footer
