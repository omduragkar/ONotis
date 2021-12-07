import { UL, ULF, ULR, ULS, URF, URR, URS } from "../constants/userConstants";

export const userLoginReducers = (state={}, action)=>{
    switch (action.type) {
        case ULR:
            return { loading: true};
        case ULS:
            return { loading: false, userinfo:action.payload.data};
        case ULF:
            return { loading: false, error:action.payload};
        case UL:
            return {userinfo:null};
        case URR:
            return { loading: true};
        case URS:
            return { loading: false, userinfo:action.payload.data};
        case URF:
            return { loading: false, error:action.payload};
        default:
            return state;

    }
}