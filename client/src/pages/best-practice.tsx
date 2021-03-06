import { useEffect } from 'react';

import { addBestPracticeToState } from '@/components/context/actions';
import { Dispatch, State } from '@/components/context/context';
import { GridItemStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { Masonry } from 'masonic';
import { BulletPoints } from '@/models/content';

const LargeCard = ({ data }: { data: BulletPoints }) => (
    <GridItemStyles key={data.title}>
        <dt>{data.title}</dt>
        <div>
            {data.value.map((val: string) => (
                <dd key={val} className="paragraphs">
                    {val}
                </dd>
            ))}
        </div>
    </GridItemStyles>
);

const BestPractice = () => {
    const dispatch = Dispatch();
    const { bestPractice } = State();

    useEffect(() => {
        if (dispatch) {
            addBestPracticeToState(dispatch);
        }
    }, [dispatch]);

    return (
        <PageStyles>
            <Masonry items={bestPractice} columnWidth={500} render={LargeCard} />
        </PageStyles>
    );
};

export default BestPractice;
