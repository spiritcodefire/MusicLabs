import React, { useEffect, useState } from 'react'
import "./AirDrop.css"
import CardAirDrop from './CardAirDrop'

const Index = () => {



    return (
        <div className="m-5">
            <span className="h2 span-inline"> WIN YOUR MUSICAL NFT</span><span style={{ color: "transparent"}}  className="win h2 span-inline">na nah</span>

            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <CardAirDrop />
                    <CardAirDrop />
                    <CardAirDrop />
                </div>
            </div>

        </div>
    )
}

export default Index
