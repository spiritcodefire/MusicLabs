import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Index = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Combien Y'a til de particule disponible
                    </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                    <Card.Body>10.000 particules ont été créer</Card.Body>
                    </Accordion.Collapse> 
                </Card>

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Details
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Texte explicatif de l'artist</Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        History
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>mettre le timer </Card.Body>
                    </Accordion.Collapse>
                </Card> */}

            </Accordion>
        </div>
    )
}

export default Index
