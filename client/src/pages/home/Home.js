import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import "./home.css"
const Home = () => {
    const history = useHistory();
    const usermain = useSelector(state => state.usermain);
    useEffect(() => {
        if(usermain.userinfo)
        {
            history.push("/mynotes")
        }
    }, [history, usermain.userinfo])
    
    return (
        <div className='m-3'>
            <img src="./images/home1.jpg" alt="home1" className='frontimg'/>
            <div className='headmaindiv'>
                <h1 className='headmain mb-3'>Keep up the Note Secure!</h1>
                <Button variant="outline-success" onClick={()=>{history.push("/user/login")}} className="button-main-log" >Login</Button>
                <Button variant="outline-dark" onClick={()=>{history.push("/user/register")}} className="button-main-log" >Signup</Button> 
            </div>
            <div>
                <h2 className='text-center m-5'>Explore Oboard!</h2>
            </div>
        </div>
    )
}

export default Home
