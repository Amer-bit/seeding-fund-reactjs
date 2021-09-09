import { viewUserTypes, chartTypes, statusTypes } from "../../actions/admin";
const initialState = {
    users: [],
    states: {},
    loading: false,
}

export default function admin(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case viewUserTypes.VIEW_REQUEST:
            return {
                ...state, loading: true
            }

        case viewUserTypes.VIEW_SUCCESS:
            return {
                ...state, users: action.payload, loading: false
            };

        case viewUserTypes.VIEW_FAILED:
            return {
                ...state, loading: false
            }

        case chartTypes.Chart_REQUEST:
            return {
                ...state, loading: true
            }

        case chartTypes.Chart_SUCCESS:
            return {
                ...state, states: action.payload, loading: false
            }

        case chartTypes.Chart_FAILED:
            return {
                ...state, loading: false
            }



        case statusTypes.CHANGE_STATUS_REQUEST:
            return {
                ...state, loading: true
            }

        case statusTypes.CHANGE_STATUS_SUCCESS:
            const { status: projectStatus } = action.payload;
            return {
                ...state, users: state.users.map(user => {
                    if(user.projectId === action.payload.projectId) return {...user, projectStatus}
                    return user
                }), loading: false
            }

        case statusTypes.CHANGE_STATUS_FAILED:
            return {
                ...state, loading: false
            }


        default:
            return state;
    }
}

