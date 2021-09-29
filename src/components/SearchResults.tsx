import { State } from './context/context';
import { GridItemStyles, GridStyles, PageStyles } from './styles/CardPageStyles';

const SearchResults = () => {
    const state = State();
    const results = Object.values(state)
        .splice(0, 6)
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

    return (
        <PageStyles>
            <GridStyles page="search">
                {results.map((item, i) => (
                    <GridItemStyles key={`${item.title}${i}`}>
                        <dt>{item.title}</dt>
                        <dd>{item.value}</dd>
                    </GridItemStyles>
                ))}
            </GridStyles>
        </PageStyles>
    );
};

export default SearchResults;
