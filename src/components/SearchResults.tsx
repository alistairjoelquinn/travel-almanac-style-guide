import { State } from './context/context';

const SearchResults = () => {
    const state = State();
    const results = Object.values(state).flat();

    return (
        <div>
            {state.}
        </div>
    );
};

export default SearchResults;
