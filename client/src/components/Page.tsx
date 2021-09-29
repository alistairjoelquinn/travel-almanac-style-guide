import { useState } from 'react';

import Header from '@/components/Header';
import { State } from '@/components/context/context';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const mainStyles = {
    border: '10px solid #d64429',
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
};

const Page: React.FC = ({ children }) => {
    const { searching } = State();
    const [userInput, setUserInput] = useState('');

    return (
        <main style={mainStyles}>
            <Header setUserInput={setUserInput} />
            <SearchBar userInput={userInput} setUserInput={setUserInput} />
            {searching ? <SearchResults /> : children}
        </main>
    );
};

export default Page;
