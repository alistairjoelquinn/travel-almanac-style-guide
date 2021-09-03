export interface InitialState {
    currentTheme: string;
}

export const initialState: InitialState = {
    currentTheme: 'light',
};

export interface Action {
    type: string;
    payload?: any;
}

export const reducer = (state = initialState, action: Action) => {
    if (action.type === 'TOGGLE_THEME') {
        return {
            ...state,
            currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
        };
    }
    return state;
};
