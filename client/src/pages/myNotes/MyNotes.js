import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Container, Button, Accordion, Alert } from 'react-bootstrap'
import { notelist } from '../../redux/actions/notelisactions'
import Loading from  "../../components/loading&error/Loading";
import Error from  "../../components/loading&error/Error";
import Snote from '../../components/snote/Snote'
const MyNotes = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const usermain = useSelector(state => state.usermain);
    const usernotes = useSelector(state => state.usernotes);
    const notecreate = useSelector(state => state.notecreate);
    useEffect(() => {
        dispatch(notelist());
        if(!usermain.userinfo)
        {
            history.push("/user/login")
        }
    }, [history, usermain.userinfo, notecreate.success, dispatch])
    return (
        <Container>
            <div className='row my-5 mb-5'>
                <h2 className='col-md-8 col-sm-6 col-xs-4 m-auto allnotehead'>Hey {usermain.userinfo?usermain.userinfo.name:""}, Your total {usernotes.notes?usernotes.notes.length:""} Notes</h2>
                <Link to="/createnote" className='col-md-4 col-sm-6 col-xs-7 text-end cbtn1'><Button>create Note</Button></Link>
            </div>
            {notecreate.success && 
                <Alert variant="success">
                    <Alert.Heading>Note Created!</Alert.Heading>
            </Alert>}
            {(usernotes.error || notecreate.error || usernotes.loading)?
                <div>
                    {usernotes.error && <Error error={usernotes.error}/>}
                    {notecreate.error && <Error error={notecreate.error.message?notecreate.error.message:notecreate.error}/>}
                    {usernotes.loading && <Loading/>}
                </div>
                :
                <Accordion defaultActiveKey="0">
                {usernotes.notes?usernotes.notes.reverse().map((m, i)=>(<Snote value={m} index={i + 1}/>)):console.log("No")}
                
                </Accordion>
            }
        </Container>
    )
}

export default MyNotes





// <Accordion defaultActiveKey="0">
//   <Accordion.Item eventKey="0">
//     <Accordion.Header>Accordion Item #1</Accordion.Header>
//     <Accordion.Body>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//       velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//       est laborum.
//     </Accordion.Body>
//   </Accordion.Item>
//   <Accordion.Item eventKey="1">
//     <Accordion.Header>Accordion Item #2</Accordion.Header>
//     <Accordion.Body>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//       velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//       est laborum.
//     </Accordion.Body>
//   </Accordion.Item>
// </Accordion>