import { useEffect } from 'react';
import { useTransition } from 'react-spring';

import { addPunctuationToState } from '@/components/context/actions';
import { Dispatch, State } from '@/components/context/context';
import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';

export const springValues = {
    from: { opacity: 0, transform: 'translate3d(0,4rem,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-4rem,0)' },
    delay: 300,
    trail: 150,
    config: { mass: 1, tension: 200, friction: 10, clamp: true },
};

const Punctuation = () => {
    const dispatch = Dispatch();
    const { punctuation } = State();
    const transition = useTransition(punctuation, springValues);

    useEffect(() => {
        if (dispatch) {
            addPunctuationToState(dispatch);
        }
    }, [dispatch]);

    return (
        <PageStyles>
            <GridStyles page="punctuation">
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

export default Punctuation;
