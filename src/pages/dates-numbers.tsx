import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { useTransition } from 'react-spring';

import datesNumbers from '../../content/dates-numbers.json';
import { springValues } from './punctuation';

const DatesNumbers = () => {
    const transition = useTransition(datesNumbers, springValues);

    return (
        <PageStyles>
            <GridStyles page="dates-numbers">
                {transition((animation, item) => (
                    <GridItemStyles style={animation} key={item.title}>
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
};

export default DatesNumbers;
