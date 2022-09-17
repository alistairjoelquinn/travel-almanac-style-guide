import { State } from 'components/context/context';
import Header from 'components/Header';
import SearchContainer from 'components/SearchContainer';
import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Page({ children: IntendedResult }: Props) {
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
}

const mainStyles = {
  border: '10px solid #d64429',
  minHeight: '100vh',
  backgroundColor: '#F0F0F0',
};
