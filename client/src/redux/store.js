import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {userLoginReducers} from "./reducers/userReducers";
import {composeWithDevTools} from "redux-devtools-extension";


const reducers = combineReducers({
    usermain:userLoginReducers
});
const userinfofromLocalStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')).data: null;

const initialState={
    usermain:{ userinfo: userinfofromLocalStorage},
}
const store= createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));
export default store;