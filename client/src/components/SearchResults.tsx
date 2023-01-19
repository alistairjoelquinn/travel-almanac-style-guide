import { State } from 'components/context/context';
import parse from 'html-react-parser';
import {
  GridItemStyles,
  GridStyles,
  PageStyles,
} from 'components/styles/CardPageStyles';

export default function SearchResults() {
  const state = State();
  const results = Object.values(state)
    .slice(0, 6)
    .flat()
    .filter((item) => {
      const vals: string[] = Object.values(item);
      for (let i = 0; i < vals.length; i++) {
        if (typeof vals[i] === 'string') {
          if (vals[i].toLowerCase().includes(state.searchTerm.toLowerCase())) {
            return item;
          }
        } else if (Array.isArray(vals[i])) {
          for (let j = 0; j < vals[i].length; j++) {
            if (
              vals[i][j].toLowerCase().includes(state.searchTerm.toLowerCase())
            ) {
              return item;
            }
          }
        }
      }
      return false;
    });

  const highlightResult = (result: string | string[]) => {
    if (typeof result === 'string') {
      return result
        .split(new RegExp(`(${state.searchTerm})`, `gi`))
        .map((item, i) => (
          <span
            key={i}
            style={{
              background:
                item.toLowerCase() === state.searchTerm.toLocaleLowerCase()
                  ? 'yellow'
                  : 'transparent',
            }}
          >
            {parse(item)}
          </span>
        ));
    }
    return (
      <ul>
        {result.map((item) => (
          <li key={item}>
            {item.toLowerCase().indexOf(state.searchTerm.toLowerCase()) > -1
              ? item
                  .split(new RegExp(`(${state.searchTerm})`, `gi`))
                  .map((innerItem, i) => (
                    <span
                      key={`${innerItem}-${i}`}
                      style={{
                        backgroundColor:
                          innerItem.toLowerCase() ===
                          state.searchTerm.toLowerCase()
                            ? 'yellow'
                            : 'transparent',
                      }}
                    >
                      {parse(innerItem)}
                    </span>
                  ))
              : parse(item)}
          </li>
        ))}
      </ul>
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
}
