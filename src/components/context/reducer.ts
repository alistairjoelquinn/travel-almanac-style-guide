import { Action, InitialState } from './models';

export const initialState: InitialState = {
    commonWords: [],
    punctuation: [],
    datesNumbers: [],
    bestPractise: [],
    quickFormatting: [],
    toneOfVoice: [],
    searching: false,
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
    if (action.type === 'ADD_DATES_NUMBERS') {
        return {
            ...state,
            datesNumbers: action.payload.datesNumbers,
        };
    }
    if (action.type === 'ADD_BEST_PRACTISE') {
        return {
            ...state,
            bestPractise: action.payload.bestPractise,
        };
    }
    if (action.type === 'ADD_QUICK_FORMATTING') {
        return {
            ...state,
            quickFormatting: action.payload.quickFormatting,
        };
    }
    return state;
};
