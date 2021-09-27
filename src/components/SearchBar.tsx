import { useState } from 'react';
import styled from 'styled-components';

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
    &:-webkit-input-placeholder,
    &:-ms-input-placeholder {
        line-height: 2rem;
        font-size: 2rem;
        vertical-align: middle;
    }
`;

const SearchBar = () => {
    const [userInput, setUserInput] = useState('');
    console.log('userInput: ', userInput);
    return <SearchBarStyles placeholder="Search here..." onChange={(e) => setUserInput(e.target.value)} />;
};

export default SearchBar;
