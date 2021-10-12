import { Dispatch, ReactNode, SetStateAction } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

interface Props {
    searching: boolean;
    userInput: string;
    setUserInput: Dispatch<SetStateAction<string>>;
    IntendedResult: ReactNode;
}

const SearchContainer = ({ searching, userInput, setUserInput, IntendedResult }: Props) => (
    <div>
        <SearchBar userInput={userInput} setUserInput={setUserInput} />
        {searching ? <SearchResults /> : IntendedResult}
    </div>
);

export default SearchContainer;
