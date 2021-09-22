export interface Words {
    title: string;
    value: string;
    category: string;
}

export interface InitialState {
    commonWords: Words[];
}

export const initialState: InitialState = {
    commonWords: [],
};

export interface Action {
    type: string;
    payload?: any;
}

export const reducer = (state = initialState, action: Action) => {
    if (action.type === 'ADD_COMMON_WORDS') {
        return {
            ...state,
            commonWords: action.payload.words,
        };
    }
    return state;
};
