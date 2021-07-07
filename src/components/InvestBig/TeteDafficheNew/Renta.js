import React , {useState} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Renta = () => {
    const [state, setstate] = useState('')
    console.log(state);
    return (
        <div>
            <div className="container" style={{height: "80vh"}}>
                <h1>Invest in an Artist</h1>
                <p className="h5">how much do you want to invest?</p>
                <InputGroup size="lg">
                    <InputGroup.Prepend>
                        <InputGroup.Text >$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" type='number' value={state} onChange={(event) => { setstate(event.target.value)}}/>
                </InputGroup>

                
                {state && 
                    <div>
                        <h4>La somme que vous recevrez sera </h4>
                        {state*2.5/100}
                    </div>
                }
            </div>       
        </div>
    )
}

export default Renta
