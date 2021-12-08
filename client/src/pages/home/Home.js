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
            <div className='img1'>
                <img src='/images/mobile1.svg' className='defimg1' alt="mainimg1"/>
            </div>
            <div className='maindiv'>
                <h1 className='headmain'>Keep up your Notes Secure!</h1>
                <div className='maindivbtn1'>
                    <Button variant="outline-success" onClick={()=>{history.push("/user/login")}} className="btn-login" >Login</Button>
                    <Button variant="outline-dark" onClick={()=>{history.push("/user/register")}} className="btn-login" >Signup</Button> 
                </div>
            </div>
            <div className='maindiv'>
                <h1 className='headmain2'>AddNotes SuperQuick with Many Easy Go options!</h1>
                <div className='maindivbtn1'>
                    <Button variant="outline-success" onClick={()=>{history.push("/mynotes")}} className="btn-login" >My Notes</Button> 
                </div>
            </div>
            <div className='img1'>
                {/* <img src='/images/mobile1.svg' className='defimg1' alt="mainimg1"/> */}
                <img src='/images/addnote1.svg' alt="mainimg1"/>
            </div>
            <img src='/images/notesbro.svg' alt="mainimg1"/>
            <div className='w-100 text-center maindiv3'>
                <h2 className='text-center'>Update Your Notes Anytime on the Go!</h2>
            </div>

            <img src='/images/addnote.svg' alt="mainimg1"/>
            <div>
                <h2 className='text-center m-5'>Explore The all New Oboard!</h2>
            </div>
        </div>
    )
}

export default Home
