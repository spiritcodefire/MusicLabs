import React from 'react'
import Particles from 'react-particles-js';
import Logo1 from '../../../assets/logo/musiclabs--472.png'
import Logo2 from '../../../assets/logo/musiclabs-horigontal.png'
import Logo3 from '../../../assets/logo/musiclabs-vertical-473.png'



const Test = () => {
    return (
        <div style={{height: '80vh'}}>
            <div className="text-center h1 " id="welcome1">
                  test
            </div>
            <Particles
    id="particles-js"
    params={{
	    "particles": {
	        "number": {
	            "value": 15,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	                "circle"
	            ],
	            "image": [
	                {
	                    "src": Logo1,
	                    "height": 20,
	                    "width": 23
	                },
	                {
	                    "src": Logo2,
	                    "height": 60,
	                    "width": 140
	                },
	                {
	                    "src": Logo3,
	                    "height": 20,
	                    "width": 50
	                }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
           
        </div>

    )
}

export default Test
