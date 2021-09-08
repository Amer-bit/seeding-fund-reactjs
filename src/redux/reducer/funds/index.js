import { viewFundsTypes } from '../../actions/funds';

const initialState = {
    projects: [],
    loading: false,
}


export default function funds(state = initialState, action){
    const { type } = action;

    switch (type) {
        case viewFundsTypes.VIEW_FUNDS_REQUEST:
            return {
                ...state, loading: true
            }
    
        case viewFundsTypes.VIEW_FUNDS_SUCCESS:
            return {
                ...state, projects: action.payload, loading: false
            }
            case viewFundsTypes.VIEW_FUNDS_FAILED:
                return {
                    ...state, loading: false
                }
        default:
            return state
    }
}