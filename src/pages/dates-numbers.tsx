import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import datesNumbers from '../../content/dates-numbers.json';

const DatesNumbers = () => (
    <PageStyles>
        <GridStyles page="dates-numbers">
            {datesNumbers.map((item) => (
                <GridItemStyles key={item.title}>
                    <dt>{item.title}</dt>
                    <ul>
                        {item.value.map((val) => (
                            <li key={val}>{val}</li>
                        ))}
                    </ul>
                </GridItemStyles>
            ))}
        </GridStyles>
    </PageStyles>
);

export default DatesNumbers;
