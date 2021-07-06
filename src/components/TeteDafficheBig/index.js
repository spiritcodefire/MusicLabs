import React from 'react'
import Accordion from './Accordion'
import "./TeteDafficheBig.css"
import dataMusic from '../../utils/dataMusic'
import TeteDafficheNew from '../TeteDafficheNew/Index'

const index = (props) => {
    
    let IdSelected = props.match.params.id
    const MusicById = dataMusic.find(data=> data.id == IdSelected)  // récupère ce qui suit mon url
    console.log(MusicById);

    return (
        
        <>
          <TeteDafficheNew />
        </>
        
    )
}

export default index
