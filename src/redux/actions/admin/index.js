import { api } from "../../axios-instance";

export const viewUserTypes = {
    VIEW_REQUEST: 'VIEW_REQUEST',
    VIEW_SUCCESS: 'VIEW_SUCCESS',
    VIEW_FAILED: 'VIEW_FAILED',
}

export const chartTypes = {
    Chart_REQUEST: 'Chart_REQUEST',
    Chart_SUCCESS: 'Chart_SUCCESS',
    Chart_FAILED: 'Chart_FAILED',
}

export const statusTypes = {
    CHANGE_STATUS_REQUEST: 'CHANGE_STATUS_REQUEST',
    CHANGE_STATUS_SUCCESS: 'CHANGE_STATUS_SUCCESS',
    CHANGE_STATUS_FAILED: 'CHANGE_STATUS_FAILED',
}

export const viewUserRequestAction = () => async dispatch =>{
    dispatch({type: viewUserTypes.VIEW_REQUEST});
    try {
        let token = localStorage.getItem('token');
        const { data } = await api.get('/admin/viewfundrequest', {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        dispatch({ type: viewUserTypes.VIEW_SUCCESS, payload: data})
    } catch (error) {
        console.error(error);
        dispatch({ type: viewUserTypes.VIEW_FAILED })
    }
}

export const chartAction = () => async dispatch =>{
    dispatch({type: chartTypes.Chart_REQUEST});
    try {
        let token = localStorage.getItem('token');
        const { data } = await api.get('/admin/states', {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        dispatch({ type: chartTypes.Chart_SUCCESS, payload: data})
    } catch (error) {
        console.error(error);
        dispatch({ type: chartTypes.Chart_FAILED })
    }
}

export const changeStatusAction = (user) => async dispatch =>{
    dispatch({type: statusTypes.CHANGE_STATUS_REQUEST});
    try {
        let token = localStorage.getItem('token');
        await api.put('/admin/changefundstatus', user,{
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        dispatch({ type: statusTypes.CHANGE_STATUS_SUCCESS, payload: user})
    } catch (error) {
        console.error(error);
        dispatch({ type: statusTypes.CHANGE_STATUS_FAILED })
    }
}