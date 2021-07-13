import React from 'react'
import './Lancement.css'
import { Link } from 'react-router-dom'
import ReactAudioPlayer from "react-audio-player";
import music from '../../assets/songMjackson.mp3' ;
import CountDown from '../CountDown/CountDownMega'
import ProgressBar from 'react-bootstrap/ProgressBar'


const CardLancement = (props) => {

    return (
        <>
            <div className="col-sm-12 col-md-2 m-1  p-0 " style={{minHeight: '400px',  borderRadius: "0px 0px 20px 20px"}}>  
                <Link to={'/launch/' + props.id}>
                    
                    {/* IMAGE HEADER */}
                    <div className="img-fluid" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?singer`})`, height: 230+'px', width: 100+'%',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center", borderRadius: '20px 20px 0px 0px' }} />
                    

                    {/* PLAYER AUDIO */}
                    <div className="border text-center" style={{backgroundColor: "#F1F3F4"}}>
                        <ReactAudioPlayer
                            src={music}
                            // autoPlay
                            controls
                        />
                    </div>

                    {/* FOOTER */}
                    <div className="p-2 text-white" style={{background: "black" , borderRadius: "0px 0px 20px 20px" ,  backgroundColor: "#1ae0df", 
                    backgroundImage: "linear-gradient(to right, #1ae0df , #1e58f7 )" }}>
                    

                        {/* <p >Prix de la part/ Nombre de part</p> */}
                        <div className="row justify-content-between">
                           
                            <div className="col-6">
                                <p>{props.NameMusic}</p>
                                <p>Buy{props.Price}wETH</p>
                            </div>

                            <div className="col-6">
                                <p>168 part / 10.000</p>
                                <ProgressBar striped variant="warning" animated now={60} />
                            </div>
                        </div>
                    </div>

                </Link>
            </div>
    </>
    )
}

export default CardLancement
