import { State } from '@/components/context/context';
import Header from '@/components/Header';
import { useState } from 'react';
import SearchContainer from './SearchContainer';

const mainStyles = {
    border: '10px solid #d64429',
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
};

const Page: React.FC = ({ children: IntendedResult }) => {
    const { searching } = State();
    const [userInput, setUserInput] = useState('');

    return (
        <div style={mainStyles}>
            <Header setUserInput={setUserInput} />
            <SearchContainer
                searching={searching}
                IntendedResult={IntendedResult}
                userInput={userInput}
                setUserInput={setUserInput}
            />
        </div>
    );
};

export default Page;
