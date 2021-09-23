import { addQuickFormattingToState } from '@/components/context/actions';
import { Dispatch, State } from '@/components/context/context';
import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { useEffect } from 'react';
import { useTransition } from 'react-spring';

import { springValues } from './punctuation';

const QuickFormatting = () => {
    const dispatch = Dispatch();
    const { quickFormatting } = State();
    const transition = useTransition(quickFormatting, springValues);

    useEffect(() => {
        if (dispatch) {
            addQuickFormattingToState(dispatch);
        }
    }, [dispatch]);

    return (
        <PageStyles>
            <GridStyles page="quick-formatting">
                {transition((animation, item) => (
                    <GridItemStyles style={animation} key={item.title}>
                        <dt>{item.title}</dt>
                        <dd>{item.value}</dd>
                    </GridItemStyles>
                ))}
            </GridStyles>
        </PageStyles>
    );
};

export default QuickFormatting;
