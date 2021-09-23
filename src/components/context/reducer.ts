import { Action, InitialState } from './models';

export const initialState: InitialState = {
    commonWords: [],
    punctuation: [],
    datesNumbers: [],
    bestPractise: [],
    quickFormatting: [],
    toneOfVoice: [],
};

export const reducer = (state = initialState, action: Action) => {
    if (action.type === 'ADD_COMMON_WORDS') {
        return {
            ...state,
            commonWords: action.payload.words,
        };
    }
    if (action.type === 'ADD_PUNCTUATION') {
        return {
            ...state,
            punctuation: action.payload.punctuation,
        };
    }
    return state;
};
