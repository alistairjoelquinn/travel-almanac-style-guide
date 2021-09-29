import { State } from './context/context';

const SearchResults = () => {
    const state = State();
    const results = Object.values(state)
        .flat()
        .filter((item) => {
            const vals: string[] = Object.values(item);
            for (let i = 0; i < vals.length; i++) {
                if (vals[i].includes(state.searchTerm)) {
                    return item;
                }
            }
            return false;
        });

    console.log('results: ', results);

    return <div>{JSON.stringify(results)}</div>;
};

export default SearchResults;
