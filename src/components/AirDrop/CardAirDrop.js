import React, { useEffect, useState } from 'react'

const CardAirDrop = () => {
    const [randomNumber, setRandomNumber ] = useState({ random: 0 })

    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);


    useEffect(() => {
      setRandomNumber({ random: randomNumber.random + rand })
        
    }, [])
    return (
       
            <div className="col-md-3 border cardAirDrop p-0">
                <div className="img-fluid imgBorderRadius" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?singer`})`, height: 40+'vh', width: 100+'%',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }} />

                <div className="bodyCardAirDrop m-4">
                    <h5>The Title </h5>
                    <div className="row justify-content-start">
                        <div className="col-2 "><div className="img-fluid rounded-circle" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?person`})`, height: 40+'px', width: 40+'px',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }} /></div>
                        <div className="col-2 text-secondary mt-2 h6">@ANONYMOUS</div>
                    </div>
                </div>

                <div className="footerCardAirDrop">
                    <div className="row justify-content-start m-3">

                        <div className="col-9 mx-2">
                            <h5 className="text-secondary">Current bid</h5>
                            <h5 className="text-white">{randomNumber.random} ETH</h5>
                        </div>

                        {/* <div className="col-3 mx-2">
                            <h5 className="text-secondary">Ending in</h5>
                        </div> */}

                    </div>
                    
                </div>

                    


            </div>
       
    )
}

export default CardAirDrop
