import React, {useState, useEffect} from 'react'
import Breakout from '../../games/breakout/index'

const Games = () => {
    const [state, setstate] = useState(false)

    useEffect(() => {
        setstate(true)
    }, [])

    return (
        <div>
            <Breakout />         
        </div>
    )
}

export default Games
