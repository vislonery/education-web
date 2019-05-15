import axios from '../../utils/fetch'
// import {getToken} from 'src/utils/auth'
import md5 from 'js-md5'

const user = {
    state: {
        token: '',
        userInfo:'',
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        },
        SET_USER_INFO (state, info) {
            state.userInfo = info
        },
    },
    actions: {
        clearInfo ({commit}) {
            commit('SET_USER_INFO',{})
        },
        userLogin ({commit}, info) {
            let {username, pwd} = info
            return async ()=>{
                try {
                    const res = await axios.post('user/login', {
                        username: username,
                        pwd: md5(pwd)
                    });
                    commit('SET_USER_INFO', res.userInfo);
                    commit('SET_TOKEN', res.token);
                }catch (e) {
                    // console.error(e)
                }

            }
        },
    }
};

export default user
