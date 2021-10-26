import { gql } from '@apollo/client';

import { client } from '@/pages/_app';
import { Action } from './models';

export const addCommonWordsToState = async (dispatch: React.Dispatch<Action>) => {
    const {
        data: { allCommonWords },
    } = await client.query({
        query: gql`
            query {
                allCommonWords {
                    title
                    value
                    category
                }
            }
        `,
    });

    dispatch({
        type: 'ADD_COMMON_WORDS',
        payload: {
            words: allCommonWords,
        },
    });
};

export const addPunctuationToState = async (dispatch: React.Dispatch<Action>) => {
    const {
        data: { allPunctuation },
    } = await client.query({
        query: gql`
            query {
                allPunctuation {
                    title
                    value
                }
            }
        `,
    });

    dispatch({
        type: 'ADD_PUNCTUATION',
        payload: {
            punctuation: allPunctuation,
        },
    });
};

export const addDatesNumbersToState = async (dispatch: React.Dispatch<Action>) => {
    const {
        data: { allDatesNumbers },
    } = await client.query({
        query: gql`
            query {
                allDatesNumbers {
                    title
                    value
                }
            }
        `,
    });

    dispatch({
        type: 'ADD_DATES_NUMBERS',
        payload: {
            datesNumbers: allDatesNumbers,
        },
    });
};

export const addBestPracticeToState = async (dispatch: React.Dispatch<Action>) => {
    const {
        data: { allBestPractise },
    } = await client.query({
        query: gql`
            query {
                allBestPractise {
                    title
                    value
                }
            }
        `,
    });

    dispatch({
        type: 'ADD_BEST_PRACTICE',
        payload: {
            bestPractice: allBestPractise,
        },
    });
};

export const addQuickFormattingToState = async (dispatch: React.Dispatch<Action>) => {
    const {
        data: { allQuickFormatting },
    } = await client.query({
        query: gql`
            query {
                allQuickFormatting {
                    title
                    value
                }
            }
        `,
    });

    dispatch({
        type: 'ADD_QUICK_FORMATTING',
        payload: {
            quickFormatting: allQuickFormatting,
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
