import { useEffect } from 'react';

import { addDatesNumbersToState } from '@/components/context/actions';
import { Dispatch, State } from '@/components/context/context';
import { GridItemStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { Masonry } from 'masonic';
import { BulletPoints } from '@/models/content';

const DottedCard = ({ data }: { data: BulletPoints }) => (
    <GridItemStyles key={data.title}>
        <dt>{data.title}</dt>
        <ul>
            {data.value.map((val: string) => (
                <li key={val}>{val}</li>
            ))}
        </ul>
    </GridItemStyles>
);

const DatesNumbers = () => {
    const dispatch = Dispatch();
    const { datesNumbers } = State();

    useEffect(() => {
        if (dispatch) {
            addDatesNumbersToState(dispatch);
        }
    }, [dispatch]);

    return (
        <PageStyles>
            <Masonry items={datesNumbers} columnWidth={400} render={DottedCard} />
        </PageStyles>
    );
};

export default DatesNumbers;
