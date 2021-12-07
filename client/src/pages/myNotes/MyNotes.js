import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Accordion, Card } from 'react-bootstrap'
const MyNotes = () => {
    const history = useHistory();
    const usermain = useSelector(state => state.usermain);
    useEffect(() => {
        if(!usermain.userinfo)
        {
            history.push("/user/login")
        }
    }, [history, usermain.userinfo])
    return (
        <div>
            Notes
            <hr/>
            <Container>
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h4>Click Here</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </Container>
        </div>
    )
}

export default MyNotes
