import React from 'react'
import './Lancement.css'
import { Link } from 'react-router-dom'
import ReactAudioPlayer from "react-audio-player";
import music from '../../assets/songMjackson.mp3' ;
import CountDown from '../CountDown/CountDownMega'


const CardLancement = (props) => {

    return (
        <>
            <div className="col-sm-12 col-md-2 m-1 CardLancement p-0">  
                <Link to={'/launch/' + props.id}>
                    
                    {/* IMAGE HEADER */}
                    <div className="row justify-content-center" > 
                        <div className="img-fluid" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?singer`})`, height: 230+'px', width: 315+'px',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center", borderRadius: '20px 20px 0px 0px' }} />
                    </div> 

                    {/* PLAYER AUDIO */}
                    <div className="border" style={{backgroundColor: "F1F3F4"}}>
                        <ReactAudioPlayer
                            src={music}
                            // autoPlay
                            controls
                        />
                    </div>

                    {/* FOOTER */}
                    <div className="p-2 text-white" style={{background: "black" , borderRadius: "0px 0px 20px 20px"}}>

                        {/* <p >Prix de la part/ Nombre de part</p> */}
                        <div className="row justify-content-between">
                           
                            <div className="col-6 ">
                                <p>{props.NameMusic}</p>
                                <p>Buy{props.Price}wETH</p>
                            </div>

                            <div className="col-6 d-flex pt-5">
                                <CountDown
                                    Date={props.Date}
                                    DateTest={props.DateTest}
                                />
                            </div>
                        </div>
                    </div>

                </Link>
            </div>
    </>
    )
}

export default CardLancement
