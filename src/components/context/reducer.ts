import { Action, InitialState } from './models';

export const initialState: InitialState = {
    commonWords: [],
    punctuation: [],
    datesNumbers: [],
    bestPractise: [],
    quickFormatting: [],
    toneOfVoice: [],
    searching: false,
    searchTerm: '',
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
    if (action.type === 'USER_SEARCH_COMMENCED') {
        return {
            ...state,
            searching: true,
        };
    }
    if (action.type === 'USER_SEARCH_ENDED') {
        return {
            ...state,
            searching: false,
        };
    }
    if (action.type === 'USER_SEARCH_INPUT') {
        return {
            ...state,
            searchTerm: action.payload,
        };
    }
    return state;
};
