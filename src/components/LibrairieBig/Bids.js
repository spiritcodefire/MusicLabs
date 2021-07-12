import React from 'react'

const Bids = () => {
    return (
    <div className="row justify-content-start">

        <div className="col-12">

            <div className="row justify-content-center ">

                <div className="col-2 mt-2 ">
                    <div className="img-fluid rounded-circle m-4 ml-n2 mt-n1" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?gif`})`, height: 50+'px', width: 50+'px',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }} />
                </div>

                <div className="col-9 ">
                    <h6>~0.001 wETH <span className="text-danger">by</span> Name-Owner <span className="text-secondary">for XXX edition</span></h6>
                    <p className="text-secondary"> DATE, Hours</p>
                </div>

            </div>
        </div>

    </div>
    )
}

export default Bids
