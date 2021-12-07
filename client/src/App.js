import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Home from "./pages/home/Home";
import MyNotes from "./pages/myNotes/MyNotes";
import Oboard from "./pages/oboard/Oboard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
function App(props) {
  
  return (
    <BrowserRouter>
      <main style={{"minHeight": "92vh"}}>
        <Header/>
        <Route path="/" exact>
         <Home/>
        </Route>
        <Route path="/oboard" exact>
         <Oboard/>
        </Route>
        <Route path="/user/login" exact>
          <Login/>
        </Route>
        <Route path="/user/register" exact>
          <Register/>
        </Route>
        <Route path="/mynotes" exact>
         <MyNotes/>
        </Route>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default (App);




