import { listUser, addUser } from "./actions";
const SHOW_LIMIT = 10;

const initialState = {
    isLoading: false,
    users:null

};

export const usersReducer = (state = initialState, usersAction) => {
    console.log(usersAction);
    switch (usersAction.type) {
        
        case 'LIST_USERS':
            return {
                ...state,
                isLoading: true,
            };
        case 'LIST_USERS_SUCCESS':
            return {
                ...state,
                users: usersReducer.payload.data.accounts,
                isLoading: false,
            };
        case 'LIST_USERS_FAIL':
            return {
                ...state,
                ledgers: [],
                isLoading: false,
                error: usersReducer.payload,
            };
        default:
            return {
                ...state,
            };
        }
    }