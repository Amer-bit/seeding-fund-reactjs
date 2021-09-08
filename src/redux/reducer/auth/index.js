import { registerTypes, loginTypes } from "../../actions/auth";
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
            localStorage.setItem('token', action.payload)
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
            console.log("success");

        
        case loginTypes.LOGIN_FAILED:
            return {
                ...state, loading: false
            }

        default:
            return state;
    }
}