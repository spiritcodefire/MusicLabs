import React, {useState, useEffect} from 'react'
import Breakout from '../../games/breakout/index'


//import { Context, SnakeGame } from "react-game-snake";

const Games = () => {
    const [state, setstate] = useState(false)

    useEffect(() => {
        setstate(true)
   
    }, [])
    return (
        <div>
            <Breakout />
            {/* {state && <SnakeGame
                colors={{
                    field: "#bdc3c7",
                    food: "#9b59b6",
                    snake: "#3498db",
                }}
                countOfHorizontalFields={20}
                countOfVerticalFields={20}
                fieldSize={20}
                loopTime={200}
                pauseAllowed={true}
                restartAllowed={true}
                onLoose={(context: Context)     => console.log(`You loosed with ${context.game.points} points.`)}
                onPause={(context: Context)     => alert("paused")}
                onRestart={(context: Context)   => alert("restarted")}
                onResume={(context: Context)    => alert("onResume")}
                onWin={(context: Context)       => alert(`You won with ${context.game.points} points.`)}
                />
            } */}
            
         
        </div>
    )
}

export default Games
