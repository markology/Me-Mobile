const INITIAL_STATE = {
    isLoggedIn: false,
    isLoading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_AUTH':
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default {
    auth: authReducer,
};