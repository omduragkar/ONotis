import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from "react-router-dom"
import { userLogout } from '../../redux/actions/userActions'
import "./header.css"
export const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const usermain = useSelector(state => state.usermain);

    return (
        <Navbar bg="light" className='navmain' expand="lg">
            <Link to="/" className='px-3 onotisbrand'>ONotis</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                {
                        usermain.userinfo?
                        <>
                            <Nav className="mr-auto mx-5 ">
                                <div>
                                    <Nav.Link onClick={()=>history.push("/mynotes")} className='w-100'>My Notes</Nav.Link>
                                </div>
                                <div>
                                    <Nav.Link onClick={()=>history.push("/createnote")}>Create Note</Nav.Link>

                                </div>
                            </Nav>
                        </>
                        :
                        <>
                            <Nav className="mr-auto mx-4">
                                <Nav.Link onClick={()=>history.push("/mynotes")} className='w-100'>Explore</Nav.Link>
                                <Nav.Link onClick={()=>history.push("/oboard")}>OBoard</Nav.Link>
                            </Nav>
                        </>
                }

                <Form inline className="form-inline">
                    <FormControl type="text" placeholder="Search" style={{"display": "inline-block"}} className="mr-sm-2 mx-2" />
                    <Button variant="outline-success" className="searchbtn" style={{"display": "inline-block"}}>Search</Button>
                </Form>
                
                    {
                        usermain.userinfo?
                        <>
                            <NavDropdown title={usermain.userinfo.name} className='userout'>
                                <NavDropdown.Item onClick={()=>{history.push("/userprofile")}} >My Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{history.push("/oboard")}} >OBoard</NavDropdown.Item>
                                {/* <NavDropdown.Divider className='text-dark' /> */}
                            </NavDropdown>
                            <Button variant="outline-danger" className="mx-2 btn-userout" onClick={()=>{
                                usermain.userinfo?
                                dispatch(userLogout())
                                :
                                history.push("/");

                            }} >Logout</Button>
                        </>
                        :
                        <div className='btn-log'>
                            <Button variant="outline-secondary" onClick={()=>{history.push("/user/login")}} className="btn-login" >Login</Button>
                            <Button variant="outline-dark" onClick={()=>{history.push("/user/register")}} className="btn-login" >Signup</Button> 
                        </div>
                }
                
            </Navbar.Collapse>
        </Navbar>
    )
}