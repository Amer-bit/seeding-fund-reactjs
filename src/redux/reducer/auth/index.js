import { registerTypes, loginTypes, logOut } from "../../actions/auth";
const initialState = {
    loggedIn: false,
    token: "",
    isAdmin: false,
    loading: false,
}


export default function auth(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case registerTypes.REGESTER_REQUEST:
            return {
                ...state, loading: true,
            }

        case registerTypes.REGESTER_SUCCESS:
            localStorage.setItem('token', action.payload);
            localStorage.setItem('loggedIn', true);
            return {
                ...state, loading: false, loggedIn: true,
            }

        case registerTypes.REGESTER_FAILED:
            return {
                ...state, loading: false,
            }

        case loginTypes.LOGIN_REQUEST:
            return {
                ...state, loading: true,
            }

        case loginTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload);
            localStorage.setItem('loggedIn', true);
            return {
                ...state, loading: false, loggedIn: true,
            }
        
        case loginTypes.ADMIN_LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload);
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('isAdmin', true);
            return {
                ...state, loading: false, loggedIn: true, isAdmin: true,
            }


        case loginTypes.LOGIN_FAILED:
            return {
                ...state, loading: false
            }

        case logOut.LOG_OUT:
            localStorage.clear();
            return {
                ...state, loading: false, loggedIn: null, isAdmin: null, token: null
            }

        default:
            return state;
    }
}