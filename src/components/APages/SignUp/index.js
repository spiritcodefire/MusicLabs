import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom' ;

const index = () => {
    return (
    <>
        <div className='container my-5 ' >
            <div className="row justify-content-center">
                <div className="col-md-8 border border-secondary border-spe p-4" >
                    <Form>
                        <h1>sign Up</h1>
                        <Form.Row>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        {/* <Form.Group>
                            <Form.File id="exampleFormControlFile1"  />
                        </Form.Group> */}

                        <p className="mt-5 h5">Uplodad your Face</p>
                        <div className="" style={{borderRadius: "16px", border: "2px dashed rgba(4,4,4,0.1"}}>
                        <p className="text-secondary text-center mt-4">MP3, MP4, Max 100mb</p> 
                            <div className="row justify-content-center m-5">
                                <div className="col-auto"><button className="row justify-content-center mx-auto btn btn-primary" >Choose File</button></div>
                            </div>
                        </div>
                        <div className="text-center m-3">
                            <Link to="/interfaceArtist">
                                <Button   variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Link>
                        </div>
                    </Form>

                </div>
            </div>
           
        </div>
        <div style={{height: "100px"}}>

        </div>
    </>
    )
}

export default index
