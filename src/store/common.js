import store from './index';
import { actionCreators as userActionCreators} from '../pages/user/store';


const login_query = {
    login_email:{
        value:'',
        validata:[
            {
                errMessage:'login email is required!',
                test:(value) => {
                    return value;
                }
            }
        ]
    },
    login_password:{
        value:'',
        validata:[
            {
                errMessage:'login password is required!',
                test:(value) => {
                    return value;
                }
            }
        ]
    }
    
}

const query = {
    email:{
        value:'',
        validata:[
            {
                errMessage:'email is required!',
                test:(value) => {
                    return value;
                }
            }
        ]
    },
    password:{
        value:'',
        validata:[
            {
                errMessage:'password is required!',
                test:(value) => {
                    return value;
                }
            },
            {
                errMessage:'password length must be 6!',
                test:(value) => {
                    return value.length === 6;
                }
            }
        ]
    }
}

const getQueryList = (isLogin = false) => {
    return isLogin ? login_query : query;
}
export const fillValidateData = (name, val, isLogin = false) => {
    let querylist = getQueryList(isLogin);
    for(let key in querylist){
        if(key.toString() === name.toString()){
            querylist[key].value = val;
        }
    }
}

export const validateForm = (isLogin = false) => {
    let querylist = getQueryList(isLogin);
    store.dispatch(userActionCreators.clearErrorMsg());
    for(let key in querylist){
        let item = querylist[key];
        let valiItem = item.validata;
        if(valiItem){
            for(let k in valiItem){
                let valis = valiItem[k];
                if(!valis.test(item.value)){
                    store.dispatch(userActionCreators.setErrorMsg(valis.errMessage))
                    return false;
                }
            }
        }
    }
    return true; 
}