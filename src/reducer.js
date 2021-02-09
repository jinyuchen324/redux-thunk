export const rootReducer = (state = {}, action) => {
    if (action.type === 'FETCH_DATA'){
        return{
            ...state,
            data: action.payload.data
        };
    }

    return state; 
};