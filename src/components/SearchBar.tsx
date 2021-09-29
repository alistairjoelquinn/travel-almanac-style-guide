import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    getSearchResults,
    userSearchCommence,
    userSearchEnd,
    addBestPractiseToState,
    addCommonWordsToState,
    addDatesNumbersToState,
    addPunctuationToState,
    addQuickFormattingToState,
} from './context/actions';
import { Dispatch } from './context/context';

const SearchBarStyles = styled.input`
    width: 94%;
    padding: 1rem;
    margin-top: 2rem;
    margin-left: 3%;
    margin-right: 3%;
    height: 4rem;
    line-height: 2rem;
    font-size: 2rem;
    vertical-align: middle;
    border-radius: 1rem;
    border: 1px solid black;
    &:-webkit-input-placeholder,
    &:-ms-input-placeholder {
        line-height: 2rem;
        font-size: 2rem;
        vertical-align: middle;
    }
`;

const SearchBar = () => {
    const dispatch = Dispatch();
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        console.log('userInput: ', userInput);
        console.log('userInput: ', !!userInput);
        if (userInput) {
            console.log('running');
            (async () => {
                await Promise.all([
                    addBestPractiseToState(dispatch),
                    addCommonWordsToState(dispatch),
                    addDatesNumbersToState(dispatch),
                    addPunctuationToState(dispatch),
                    addQuickFormattingToState(dispatch),
                ]);
                await userSearchCommence(dispatch);
                await getSearchResults(dispatch, userInput);
            })();
        } else {
            userSearchEnd(dispatch);
        }
    }, [userInput, dispatch]);

    return <SearchBarStyles placeholder="Search..." onChange={(e) => setUserInput(e.target.value)} />;
};

export default SearchBar;
