
// actions
// user listing wit filter and pagination
export const UserList = (payload) => ({type: 'users/list',payload})
export const UserListFailed = (payload) => ({type: 'users/list/failed',payload})

// create user request
export const UserCreateRequest = (payload) => ({type: 'user/create/request',payload})

// create user sucess message
export const UserCreateSucces = (payload) => ({type: 'user/create/sucess',payload})

// create user failed message
export const UserCreateFailed = (payload) => ({type: 'user/create/failed',payload})

// apply name filter
// age/name sort
// sorting order
// pagination set page number
// get user details
// update user request
// udpate sucess message
// update failed message
