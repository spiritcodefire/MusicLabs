import React from 'react'
import { Link } from 'react-router-dom' ;
import './CreateAll.css'

const Single = () => {
    const [launch, setLaunch] = React.useState(true)
    const [airDrop, setAirDrop] = React.useState(false)

    function ActiveAirDrop() {
        console.log('ActivAirDrop Open');
        setLaunch(false)  
        setAirDrop(true) 
    }
    function ActiveLunch() {
        console.log('ActivLunch Open');
        setLaunch(true)  
        setAirDrop(false) 
    }

    return (
        <div className="container">
            <div className="row justify-content-center">

                <div className="col-md-8 col-sm-12" style={{height:"300px"}}>

                    <h1 className="m-5">Create single collectible</h1>
                    <p className="mt-5 h5">Uplodad file</p>
                    <div className="" style={{borderRadius: "16px", border: "2px dashed rgba(4,4,4,0.1"}}>
                        <p className="text-secondary text-center mt-4">MP3, MP4, Max 100mb</p> 
                        <div className="row justify-content-center m-5">
                            <div className="col-auto"><button className="row justify-content-center mx-auto btn btn-primary" >Choose File</button></div>
                        </div>
                    </div>
                    <h5 className="my-5">Put on market-Place</h5>
                    <div className="row justify-content-center text-center">
                        <button className="col-md-3 col-sm-12 border-spe pt-2 h5 mx-1 bg-light shadow" onClick={ActiveLunch}  style={{height:'150px'}}>Launch</button>
                        <button className="col-md-3 col-sm-12 border-spe pt-2 h5 mx-1 bg-light shadow" onClick={ActiveAirDrop}  >Air-Drop</button>
                    </div>
                    {launch && 'launch est true'}
                    {airDrop && 'air-Drop est true'}


                </div>

                <div className="col-md-4 col-sm-12">
                    <p className="h5">Preview</p>

                </div>

            </div>
            

        </div>
    )
}

export default Single

