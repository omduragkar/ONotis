import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Button, Container, Form } from 'react-bootstrap';
import './login.css'
import { userLogin } from '../../redux/actions/userActions';
import Error from '../loading&error/Error';
import Loading from '../loading&error/Loading';
import {useHistory} from "react-router-dom";
import background from "./securelogin.svg";

const Login = ()=> {
  const history = useHistory();
  const usermain = useSelector(state => state.usermain)
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  useEffect(() => {
    if(usermain.userinfo)
    {
      (history.push("/mynotes"));
    }
  }, [history, usermain.userinfo])
  const change = e =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  const clicksubmit = e=>{
    e.preventDefault();
    dispatch(userLogin(user.email, user.password));
    if(!usermain.error)
    {
      setUser({});
    }

  }
  return (
    <>
      <h1 className='text-center headreg1'>Login</h1>
      
      {/* {console.log(usermain.userinfo)} */}
      <Container className='container-fluid logincont m-auto'>
        <h1 style={{backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat',height:'500px', width:'500px'}} className='text-center headlog'>Login</h1>
        <Form className="logincontin" onSubmit={(e)=>clicksubmit(e)}>
          {usermain.error && <Error error={usermain.error} />}
          {usermain.loading?
            <Loading/>
            :
            <>
              <Form.Group controlId="formBasicEmail" className="m-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e)=>{change(e)}} name="email" value={user.email || ""} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword"  className="m-3">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>{change(e)}} name="password" value={user.password || ""} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox"  className="m-3">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <div className='text-center'>
                <Button variant="outline-primary" className="sbtn m-3" type="submit">
                  Login
                </Button>
                <a onClick={()=>{history.push("/user/register")}}  className="m-3 lbtn">
                  Need to register?
                </a>
              </div>
            </>

          }
        </Form>
      </Container>
    </>
    );
}

export default Login;
