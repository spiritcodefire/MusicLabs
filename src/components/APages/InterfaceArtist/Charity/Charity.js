import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import OursPolaire from '../../../../assets/oursPolaire.jpg'
import FreePalestine from '../../../../assets/free-palestine.jpg'
import Veganisme from '../../../../assets/veganisme.jpg'

const Charity = () => {
    return (
        <div>
            <div className="container shadow-lg">
                <div className="row justify-content-center my-5">
                    <div className="" style={{border: "1px grey solid", borderRadius: "20px", height: "80vh"}} className="col-12">
                        <h2 className="text-center mt-3">What is the percentage for charity?</h2>
                            <InputGroup size="lg">
                                <InputGroup.Prepend>
                                    <InputGroup.Text >%</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                            </InputGroup>
                            <h3 className="mt-5">Choose your association</h3>
                        <div className="row justify-content-center my-3">
                            <div style={{background: `url(${OursPolaire})`,backgroundSize: "cover", height: "30Vmin", minWidth: '300px', minHeight: '300px'}} className="col-sm-12 col-md-3 m-1 border rounded-spe " ></div>
                            <div style={{background: `url(${FreePalestine})`,backgroundSize: "contain", height: "30Vmin", minWidth: '300px', minHeight: '300px'}} className="col-sm-12 col-md-3 m-1 border rounded-spe "></div>
                            <div style={{background: `url(${Veganisme})`,backgroundSize: "contain", height: "30Vmin", minWidth: '300px', minHeight: '300px'}} className="col-sm-12 col-md-3 m-1 border rounded-spe "></div>
                        </div>

                        <div className="my-5">
                            <div className="mt-3">
                                <Button variant="warning" size="lg" block>
                                    Connect Your Wallet
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charity
