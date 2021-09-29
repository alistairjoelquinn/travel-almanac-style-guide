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

    const highlightResult = (result: string | string[]) => {
        if (typeof result === 'string') {
            return result.split(new RegExp(`(${state.searchTerm})`, `gi`)).map((item, i) => (
                <span
                    key={i}
                    style={{
                        background:
                            item.toLowerCase() === state.searchTerm.toLocaleLowerCase() ? 'yellow' : 'transparent',
                    }}
                >
                    {item}
                </span>
            ));
        }
        return result.map((item) =>
            item.split(new RegExp(`(${state.searchTerm})`, `gi`)).map((innerItem, i) => (
                <span
                    key={i}
                    style={{
                        background:
                            innerItem.toLowerCase() === state.searchTerm.toLocaleLowerCase() ? 'yellow' : 'transparent',
                    }}
                >
                    {item}
                </span>
            )),
        );
    };

    return (
        <PageStyles>
            <GridStyles page="search">
                {results.map((item, i) => (
                    <GridItemStyles key={`${item.title}${i}`}>
                        <dt>{item.title && highlightResult(item.title)}</dt>
                        <dd>{item.value && highlightResult(item.value)}</dd>
                    </GridItemStyles>
                ))}
            </GridStyles>
        </PageStyles>
    );
};

export default SearchResults;
