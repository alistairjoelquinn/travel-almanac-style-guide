import { Action } from './models';

import words from '../../../content/common-words.json';
import punctuation from '../../../content/punctuation.json';
import datesNumbers from '../../../content/dates-numbers.json';
import bestPractice from '../../../content/best-practice.json';
import quickFormatting from '../../../content/quick-formatting.json';

export const addCommonWordsToState = async (dispatch: React.Dispatch<Action>) => {
    dispatch({
        type: 'ADD_COMMON_WORDS',
        payload: {
            words,
        },
    });
};

export const addPunctuationToState = async (dispatch: React.Dispatch<Action>) => {
    dispatch({
        type: 'ADD_PUNCTUATION',
        payload: {
            punctuation,
        },
    });
};

export const addDatesNumbersToState = async (dispatch: React.Dispatch<Action>) => {
    dispatch({
        type: 'ADD_DATES_NUMBERS',
        payload: {
            datesNumbers,
        },
    });
};

export const addBestPracticeToState = async (dispatch: React.Dispatch<Action>) => {
    dispatch({
        type: 'ADD_BEST_PRACTICE',
        payload: {
            bestPractice,
        },
    });
};

export const addQuickFormattingToState = async (dispatch: React.Dispatch<Action>) => {
    dispatch({
        type: 'ADD_QUICK_FORMATTING',
        payload: {
            quickFormatting,
        },
    });
};

export const userSearchCommence = async (dispatch: React.Dispatch<Action>) =>
    dispatch({ type: 'USER_SEARCH_COMMENCED' });

export const userSearchEnd = async (dispatch: React.Dispatch<Action>) => dispatch({ type: 'USER_SEARCH_ENDED' });

export const getSearchResults = async (dispatch: React.Dispatch<Action>, userInput: string) => {
    dispatch({
        type: 'USER_SEARCH_INPUT',
        payload: userInput,
    });
};
