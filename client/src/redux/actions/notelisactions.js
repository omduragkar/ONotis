const axios = require('axios');
const { NLS, NLF, NLR } = require('../constants/notesConstants');
export const notelist = ()=>async (dispatch, getState)=>{
    try {
        dispatch({
            type: NLR
        })
        const{
            usermain:{userinfo}
        } = getState();

        const config = {
            headers:{
                Authorization:`Bearer ${userinfo.token}`,
            },
        }
        const data = await axios.get('https://onotis.up.railway.app/api/notes/', config);
        dispatch({type:NLS, payload:data.data})
    } catch (err) {
        console.log(err);
        dispatch({
            type: NLF,
            payload: err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
        });
    }
}
