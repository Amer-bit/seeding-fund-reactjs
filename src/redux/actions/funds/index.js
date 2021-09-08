import { api } from '../../axios-instance';

export const viewFundsTypes = {
    VIEW_FUNDS_REQUEST: "FUNDS_REQUEST",
    VIEW_FUNDS_SUCCESS: "FUNDS_SUCCESS",
    VIEW_FUNDS_FAILED: "FUND_FAILED",
}

export const createFundsTypes = {
    CREATE_FUNDS_REQUEST: "FUNDS_REQUEST",
    CREATE_FUNDS_SUCCESS: "FUNDS_SUCCESS",
    CREATE_FUNDS_FAILED: "FUND_FAILED",
}

export const viewFundsAction = () => async dispatch => {
    dispatch({ type: viewFundsTypes.VIEW_FUNDS_REQUEST });
    try {
        let token = localStorage.getItem('token');
        let { data } = await api.get('/projectowner/viewfundrequest', {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });
        dispatch({ type: viewFundsTypes.VIEW_FUNDS_SUCCESS, payload: data })
    } catch (error) {
        console.error(error)
        dispatch({ type: viewFundsTypes.VIEW_FUNDS_FAILED, payload: error })
    }
}

export const requestFundAction = (fundRequest) => async dispatch => {
    // dispatch({ type: createFundsTypes.FUNDS_REQUEST });
    try {
        let token = localStorage.getItem('token');
        const response = await api.post('/projectowner/createfundrequest', fundRequest, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });
        console.log(response);
        // dispatch({ type: createFundsTypes.FUNDS_SUCCESS, payload: data })
    } catch (error) {
        console.error(error)
        // dispatch({ type: createFundsTypes.FUNDS_FAILED, payload: error })
    }
}