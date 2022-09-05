let nextUserId = 0
export const addUser = (payload) => ({
  type: 'ADD_USER',
  id: nextUserId++,
  payload
})
export const listUsers = (payload) => ({
    type: 'LIST_USERS',
    payload 
});