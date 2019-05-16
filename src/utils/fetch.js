/* eslint-disable no-console,no-unused-vars */
import axios from "axios";
import { isPlainObject, isUndefined, omitBy } from 'lodash';
import Storage from '../utils/Storage';

const isInValidValue = (v) => {
    if (isUndefined(v) || v === '') {
        return true;
    }
};
export default (url, option = {}, reqOption) => {
    const { method = 'get', headers = {} } = option;
    let { data = {} } = option;
    if (!option.containEmpty && isPlainObject(data)) {
        data = omitBy(data, isInValidValue);
    }
    let params = {};
    if (data.params) {
        params = omitBy(data.params, axios.isInValidValue);
    }
    params.random = Math.random();
    return new Promise(async resolve => {
        try {
            const token = Storage.getItem('token');
            // const headers2 = {
            //     Accept: 'application/json',
            //     'Content-Type': headers['Content-Type'] || 'application/json',
            //     'ACCESS-TOKEN': token
            // };
            const res = await axios({
                url,
                // method,
                // headers: headers2,
                // data,
                // params,
                // ...reqOption
            });
            console.log('sdf')
            if (res.status !== 200) {
                // message.error('网络错误！');
            }
            const { errorCode, errorMessage } = res.data;
            if (errorCode) {
                console.log(errorMessage);
                return;
            }
            resolve(res.data);
        } catch (e) {
            // message.info('服务错误！');
        }
    });
}
