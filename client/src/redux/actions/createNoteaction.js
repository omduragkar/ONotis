const axios = require('axios');
const { NCS, NCF, NCR } = require('../constants/createNotesConstant');
const createnoteaction = (title, content, category)=>async (dispatch, getState)=>{
    try {
        dispatch({
            type: NCR
        })
        const{
            usermain:{userinfo}
        } = getState();

        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userinfo.token}`,
            },
        }
        const data = await axios.post('/api/notes/create',{title, content, category}, config);
        dispatch({type:NCS, payload:data.data})
    } catch (err) {
        console.log(err);
        dispatch({
            type: NCF,
            payload: err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
        });
    }
}

export default createnoteaction;

  