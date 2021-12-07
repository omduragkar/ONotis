import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector} from "react-redux"
import { useHistory } from 'react-router-dom';
import { register } from '../../redux/actions/userActions';
import Error from '../loading&error/Error';
import Loading from '../loading&error/Loading';
import "./register.css"

const Register = ()=> {
    const history = useHistory();
    const dispatch = useDispatch();
    const usermain = useSelector(state => state.usermain)
    const [user, setUser] = useState({});
    const change = e =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  const clicksubmit = e=>{
    e.preventDefault();
    console.log(user);
    dispatch(register(user.email, user.password, user.confirmpassword, user.name, user.dob));
    if(!usermain.error)
    {
      setUser({});
    }
  }
  useEffect(() => {
    if(usermain.userinfo)
    {
       history.push("/mynotes"); 
    }
  }, [history, usermain.userinfo])
  return (
      <>
        <h1 className='text-center m-auto p-auto headreg'>Register</h1>
        <Container className='container-fluid logincont'>
            <Form className="logincontin" onSubmit={(e)=>clicksubmit(e)}>
                {usermain.loading && <Loading/>}
                {usermain.error && <Error error={usermain.error} />}
                <Form.Group controlId="formBasicname" className="m-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e)=>{change(e)}} name="name" value={user.name || ""} type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="m-2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e)=>{change(e)}} name="email" value={user.email || ""} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword"  className="m-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>{change(e)}} name="password" value={user.password || ""} type="password" required placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicconfirmPassword"  className="m-2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={(e)=>{change(e)}} name="confirmpassword" required value={user.confirmpassword || ""} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group controlId="formBasicconfirmPassword"  className="m-2">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control onChange={(e)=>{change(e)}} name="dob" value={user.dob || ""} type="Date" placeholder="Birth date" required />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox"  className="m-2">
                    <Form.Check type="checkbox" label="Agree to Terms & condition" required/>
                </Form.Group>
                <Form.Group className="text-center">
                    <Button variant="primary" className="sbtn m-2" type="submit">
                        Register
                    </Button>
                    <a onClick={()=>{history.push("/user/login")}} className="click-reg m-2">
                        Already Registered?
                    </a>

                </Form.Group>   
            </Form>
        </Container>
    </>
    );
}

export default Register;
