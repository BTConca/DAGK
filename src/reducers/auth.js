export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid,
                displayName : action.displayName
            };
        case 'LOGOUT':
            return {};
        case 'GETINFO':
            return state;
        default:
            return state;
    }
};
