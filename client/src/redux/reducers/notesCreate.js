import { NCF, NCR, NCS } from "../constants/createNotesConstant";



const createNote = (state={}, action)=>{
    switch (action.type) {
        case NCR:
            return ({
                loading: true
            })
        case NCS:
            return ({
                loading:false,
                success:true
            })
        case NCF:
            return ({
                loading:false,
                error:action.payload
            })
        default:
            return state;
    }
}

export default createNote;