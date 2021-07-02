import React, {useEffect} from 'react';
import { Context } from '../hooks/ContextProvider'

import { Link } from 'react-router-dom' ;

const Footer = () => {
  
    const context = React.useContext(Context)
      console.log(context.NavBar);

    return (
        <>  
            {context.NavBar && 
            
                <div className="container-fluid text-white bg-secondary mt-5 fixed-bottom">
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
                            <h4>Community</h4>  
                            <p>Discussion</p>
                        </div>

                        <div className="col-xs-12 col-md-3 rounded-lg m-1 shadow-lg">
                            <Link to="/artist" className="text-white">
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
