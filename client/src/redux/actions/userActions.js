import axios from 'axios'
import {UL, ULF, ULR, ULS, URF, URR, URS} from '../constants/userConstants';
export const userLogin = (email, password) => async (dispatch)=>{
    try{
        dispatch({type:ULR})
        const config ={
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let x={
            email: email,
            password: password
        }
        // console.log(x)
        console.log("using axios");
        const data = await axios.post("http://localhost:4000/auth/user/login",x, config);
        dispatch({type: ULS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    catch(err)
    {   
        console.log(err);
        dispatch({
            type: ULF,
            payload: err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
        });
    }
};


export const userLogout = ()=>(dispatch)=>{
    localStorage.removeItem("userInfo");
    dispatch({type:UL, payload:{}})
}



export const register = (email, password, confirmpassword, name, dob, avatar="om")=> async (dispatch)=>{

    try{
        dispatch({type:URR})
        const config ={
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let x={
            email,
            password,
            confirmpassword,
            name,
            dob,
            avatar,
        }
        console.log("using axios");
        const data = await axios.post("https://onotis.up.railway.app/auth/user/register",x, config);
        dispatch({type: URS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    catch(err)
    {
        console.log(err);
        dispatch({
            type: URF,
            payload: err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
        });
    }


}