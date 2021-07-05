import React from 'react'
import './Librairie.css'
import { Link } from 'react-router-dom'

const CardLibrairie = (props) => {


   
    return (
        <>
            <div className="col-md-2 CardLancement p-0 m-1 my-3 border shadow">  
                <Link to={'/librairie/' + props.id}>

                    {/* IMAGE HEADER */}
                    <div className="img-fluid" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?singer`})`, height: 230+'px', width: 100+'%',  backgroundRepeat: 'no-repeat', left: 0 ,backgroundSize: 'cover', backgroundPosition: "center", borderRadius: '20px 20px 0px 0px' }} />

                    {/* CENTER */}
                    <div > 
                        <div className="img-fluid rounded-circle m-4" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?crypto`})`, height: 40+'px', width: 40+'px',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }} />
                    </div> 

                    {/* FOOTER */}
                    <div className="p-2 text-white" style={{background: "black" , height: "100px", borderRadius: "0px 0px 20px 20px"}}>
                        
                        {/* <p >Prix de la part/ Nombre de part</p> */}
                        <div className="row justify-content-between">

                            <div className="col-6">
                                <p >{props.NameMusic}</p>    
                                <p >Bid {props.Price}wETH</p>
                            </div>

                            <div className="col-6">
                                <div className="mx-1 " style={{fontSize: "12px"}}>time required to launch</div> 
                                <div className="mx-1">1D 24H 13M</div> 
                            </div>

                        </div>
                    </div>

                </Link>
            </div>
        </>
    )
}

export default CardLibrairie

