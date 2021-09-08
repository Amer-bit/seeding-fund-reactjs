import { api } from "../../axios-instance";

export const registerTypes =  {
    REGESTER_REQUEST: 'REGESTER_REQUEST',
    REGESTER_SUCCESS: 'REGESTER_SUCCESS',
    REGESTER_FAILED: 'REGESTER_FAILED',
}

export const loginTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
}

export const logOut = {
    LOG_OUT: 'LOG_OUT'
}

export const logOutAction = () => dispatch => {
    dispatch({ type: logOut.LOG_OUT });
}

export const loginAction = user => async dispatch => {
    dispatch({ type: loginTypes.LOGIN_REQUEST })
    if(user){
        try {
            let { data: { accessToken } } = await api.post(`/login`, { ...user });
            dispatch({ type: loginTypes.LOGIN_SUCCESS, payload: accessToken })
        } catch (error) {
            console.error(error);
            dispatch({ type: loginTypes.LOGIN_FAILED, payload: error })
        }
    }
}

export const adminLoginAction = user => async dispatch => {
    dispatch({ type: loginTypes.LOGIN_REQUEST })
    if(user){
        try {
            let { data: { accessToken } } = await api.post(`/admin/login`, { ...user });
            dispatch({ type: loginTypes.LOGIN_SUCCESS, payload: accessToken })
        } catch (error) {
            console.error(error);
            dispatch({ type: loginTypes.LOGIN_FAILED, payload: error })
        }
    }
}

export const registerAction = user => async dispatch => {
    dispatch({ type: registerTypes.REGESTER_REQUEST })
    if(user){
      try {
        let { data: { accessToken } }  = await api.post(`/register`,{ ...user });
        dispatch({ type: registerTypes.REGESTER_SUCCESS, payload: accessToken })
      } catch (error) {
        console.error(error);
        dispatch({ type: registerTypes.REGESTER_FAILED, payload: error })
      }
    }
}
