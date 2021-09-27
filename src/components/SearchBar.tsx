import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { userSearchCommence, userSearchEnd } from './context/actions';
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
        if (userInput) {
            userSearchCommence(dispatch);
        } else {
            userSearchEnd(dispatch);
        }
    }, [userInput, dispatch]);

    return <SearchBarStyles placeholder="Search..." onChange={(e) => setUserInput(e.target.value)} />;
};

export default SearchBar;
