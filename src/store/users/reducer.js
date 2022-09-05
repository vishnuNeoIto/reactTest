const SHOW_LIMIT = 10;
const initialState = {
    isLoading: false,
    users:null,
    error:null,

};

export const userReducer = (state = initialState, usersAction) => {
    console.log(usersAction);
    switch (usersAction.type) {
        case 'users/list':
            return {
                ...state,
                isLoading: true,
                users:usersAction.payload
            };
        case 'users/list/failed':
            return {
                ...state,
                isLoading: true,
                error:usersAction.payload
            };    
        case 'user/create/request':
            return {
                ...state,
                isLoading: true,
            };
        case 'user/create/sucess':
            return {
                ...state,
                users: usersAction.payload.data.user,
                isLoading: false,
            };
        case 'user/create/failed':
            return {
                ...state,
                ledgers: [],
                isLoading: false,
                error: usersAction.payload,
            };
        default:
            return {
                ...state,
            };
        }
    }