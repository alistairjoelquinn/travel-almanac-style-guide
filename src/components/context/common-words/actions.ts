import { Action } from './reducer';

import words from '../../../../content/common-words.json';

export const addCommonWordsToState = async (dispatch: React.Dispatch<Action>) => {
    dispatch({
        type: 'ADD_COMMON_WORDS',
        payload: {
            words,
        },
    });
};
