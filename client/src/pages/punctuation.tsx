import { useEffect } from 'react';

import { addPunctuationToState } from '@/components/context/actions';
import { Dispatch, State } from '@/components/context/context';
import { GridItemStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { Masonry } from 'masonic';

export const springValues = {
    from: { opacity: 0, transform: 'translate3d(0,4rem,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-4rem,0)' },
    delay: 300,
    trail: 150,
    config: { mass: 1, tension: 200, friction: 10, clamp: true },
};

export const Card = ({ data }: { data: Words }) => (
    <GridItemStyles key={data.title}>
        <dt>{data.title}</dt>
        {data.value && <dd>{data.value}</dd>}
    </GridItemStyles>
);

const Punctuation = () => {
    const dispatch = Dispatch();
    const { punctuation } = State();

    useEffect(() => {
        if (dispatch) {
            addPunctuationToState(dispatch);
        }
    }, [dispatch]);

    return (
        <PageStyles>
            <Masonry items={punctuation} columnWidth={300} render={Card} />
        </PageStyles>
    );
};

export default Punctuation;
