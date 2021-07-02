import React from 'react'
import { Link } from 'react-router-dom' ;
import './Artist.css'
import undraw_authentication from '../../../assets/undraw_authentication.svg' ;
import undraw_Sign_in from '../../../assets/undraw_Sign_in.svg' ;

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import Torus from '../../../assets/logoTorus.svg'
import portis from '../../../assets/logoPortis.svg'
import arcEnCiel from '../../../assets/arc-en-ciel.png'
import Coinbase from '../../../assets/coinBase.svg'
import fortMatic from '../../../assets/fortmatic.svg'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

      
    <Modal.Body className="show-grid">
        <Container>
            <Row>
                <h1>Connect your wallet</h1>
                <p className="font-bolder">Connect with one of available wallet providers or create an ew wallet. What is a wallet ?</p>
            
                <Col xs={12} md={4}>
                    
                    <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                        <img height="150px"  src={Torus} alt="img Torus" />
                       <p>Torus</p> 
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                        <img   height="150px"  src={portis} alt="portis" />
                        <p>Portis</p>
                    </div>
                </Col>

                <Col xs={12} md={4}>
                    <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                        <img  height="150px"  src={arcEnCiel} alt="WalletConnect" />
                        <p>WalletConnect</p>
                    </div>
                </Col>
    
                <Col xs={12} md={4}>
                    <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                        <img  height="150px"  src={Coinbase} alt="Coinbase" />
                        <p>Coinbase</p>
                    </div>
                </Col>

                <Col xs={12} md={4}>
                    <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                        <img src={fortMatic}  height="150px"  alt="Fortmatic" />
                        <p>Fortmatic</p>
                    </div>
                </Col>

                <Col xs={12} md={4}>
                    <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                        Autre
                    </div>
                </Col>

            </Row>    
        </Container>     


       
    </Modal.Body>
        
        <Modal.Footer>
          <Button variant="info" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


const Index = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="container">

            <div className="row justify-content-center">
                <div className="col-md-10 col-sm-12 p-3">
                    <h1 className="my-4">Artist </h1>
                    <p className="text-secondary h5">Welcome in a new world</p>
                </div>
            </div>

            <div className="row justify-content-center">

                <div className="col-md-5 col-sm-12 rounded-spe p-4 m-1" style={{height: "300px"}}>
                    <Link to="/signup">
                        <h3 className="text-dark">Sign Up</h3>
                        <figure className="text-center">
                            <img src={undraw_Sign_in} height="200px" alt="" />
                        </figure>
                    </Link>
                </div>

                <div className="col-md-5 col-sm-12 rounded-spe p-4 m-1 cursor" onClick={() => setModalShow(true)}   style={{height: "300px"}}>
                    {/* <Link to="/signin"> */}
                        <h3 className="text-dark">Sign In</h3>
                        <figure className="text-center">
                            <img src={undraw_authentication} height="220px" alt="" />
                        </figure>
                    {/* </Link> */}
                </div>

            </div>
            <MyVerticallyCenteredModal  show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default Index
