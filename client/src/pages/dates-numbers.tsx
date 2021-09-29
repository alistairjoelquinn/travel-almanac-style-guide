import { useEffect } from 'react';
import { useTransition } from 'react-spring';

import { addDatesNumbersToState } from '@/components/context/actions';
import { Dispatch, State } from '@/components/context/context';
import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { springValues } from './punctuation';

const DatesNumbers = () => {
    const dispatch = Dispatch();
    const { datesNumbers } = State();
    const transition = useTransition(datesNumbers, springValues);

    useEffect(() => {
        if (dispatch) {
            addDatesNumbersToState(dispatch);
        }
    }, [dispatch]);

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
