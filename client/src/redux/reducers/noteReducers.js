import { NLF, NLR, NLS } from "../constants/notesConstants";


const notesfeed = (state={notes:[]}, action)=>{
    switch (action.type) {
        case NLR:
            return ({
                loading: true
            })
        case NLS:
            return ({
                loading:false,
                notes:action.payload
            })
        case NLF:
            return ({
                loading:false,
                error:action.payload
            })
        default:
            return state;
    }
}

export default notesfeed;