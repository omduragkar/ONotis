import React from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import "./snote.css"
const Snote = (props) => {
    return (
        <>
            <Card className='m-2' style={{cursor:"pointer"}}>
                <Accordion.Toggle as={Card.Header} eventKey={props.index}>
                    <div className='actitle'>
                        <h4 className='titleac'>{props.value.title}</h4>
                    </div>
                    <div className='acbutton'>
                        <Button className="mx-2">Edit</Button>
                        <Button variant='outline-danger'onClick={(e)=>e.preventDefault()} className="mx-2">Delete</Button>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={props.index }>
                    <Card.Body>
                        <Badge className='bg-primary mb-3'>Category: {props.value.category}</Badge>
                        <h2 className='text-center'>{props.value.title}</h2>
                        <hr style={{ border: "0",clear:"both",  display:"block",  width: "96%", backgroundColor:"black",  height: "2px"}}/>
                        <ReactMarkdown>{props.value.content}</ReactMarkdown>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    )
}

export default Snote
