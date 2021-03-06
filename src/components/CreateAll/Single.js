import React from 'react'
import './CreateAll.css'
import {Context} from '../../hooks/ContextProvider'
import DropdownButton from 'react-bootstrap/DropdownButton'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Single = () => {
    const context = React.useContext(Context)
    const [launch, setLaunch] = React.useState(true)
    const [airDrop, setAirDrop] = React.useState(false)

    React.useEffect(() => {
        context.setNavBar(true)
    }, [])

    function ActiveAirDrop() {
        setLaunch(false)  
        setAirDrop(true) 
    }

    function ActiveLunch() {
        setLaunch(true)  
        setAirDrop(false) 
    }

    return (
        <div className="container">
            <div className="row justify-content-center">

                <div className="col-md-8 col-sm-12" >

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
                        <button className="col-md-3 col-sm-12 border-spe pt-2 h5 mx-1 bg-light shadow" onClick={ActiveLunch}  style={{height:'150px'}}>Launch <br/><span style={{fontSize: "14px"}}> option Air Drop </span></button>
                        <div className="col-md-1 h5 pt-5">or</div>
                        <button className="col-md-3 col-sm-12 border-spe pt-2 h5 mx-1 bg-light shadow" onClick={ActiveAirDrop}  >Air-Drop 100%</button>
                    </div>
                  
                    {launch && 
                        <div className='my-5'>
                            <InputGroup>
                                <FormControl placeholder="Enter price for one piece" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <DropdownButton as={InputGroup.Append} variant="outline-secondary" title="ETH" id="input-group-dropdown-2" >
                                        <Dropdown.Item href="#">ETH</Dropdown.Item>
                                        <Dropdown.Item href="#">DAI</Dropdown.Item>
                                        <Dropdown.Item href="#">USDC</Dropdown.Item>
                                    </DropdownButton>
                            </InputGroup>
                            <div className="row">
                                <p className="text-secondary h6 ml-3">Service fee 2.5%</p>
                                <p className="text-secondary h6 ml-3">You will receive XXX ETH</p>
                            </div>
                           
                            
                        
                        </div>
                    }

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        aria-label="Title"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Description</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        aria-label="Title"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default"  >Number of copies</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        aria-label="Title"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Between 1 and 10.000.000"
                        type="number"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>%</InputGroup.Text>
                        <FormControl
                        placeholder="percentage for the producere"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />

                        <Button variant="outline-secondary" id="button-addon2">
                            Add Wallet
                        </Button>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>%</InputGroup.Text>
                        <FormControl
                        placeholder="percentage for the BeatMaker"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />

                        <Button variant="outline-secondary" id="button-addon2">
                            Add Wallet
                        </Button>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>%</InputGroup.Text>
                        <FormControl
                        placeholder="percentage of Royalties , 10% , 20% , 30%"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <div className="row justify-content-center">
                        <div className="col-auto"><button className="mx-auto btn btn-success">Create item</button></div>
                    </div>
                </div>

                


                <div className="col-md-4 col-sm-12 mt-1 " style={{border:"1px grey solid", minHeight: "100px", borderRadius: "20px"}}>
                    <p className="h5 p-3 mt-5" >Preview</p>
                   
                </div>

            </div>
            

        </div>
    )
}

export default Single

