export const initialState = { user: null, lastMessage: null};

export const actionTypes = { SET_USER: "SET_USER", SET_LASTMESSAGE: "SET_LASTMESSAGE"};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case actionTypes.SET_LASTMESSAGE:
            return {
                ...state,
                lastMessage: action.lastMessage,
            }
          
        default:
            return state;
    }  
};

export default reducer;