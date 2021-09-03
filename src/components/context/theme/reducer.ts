export const reducer = (state, action) => {
    if (action.type === 'TOGGLE_THEME') {
        return {
            ...state,
            currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
        };
    }
    return state;
};
