import { Action } from './models';

import words from '../../../content/common-words.json';
import punctuation from '../../../content/punctuation.json';
import datesNumbers from '../../../content/dates-numbers.json';

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
