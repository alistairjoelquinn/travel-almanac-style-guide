import { useEffect } from 'react';
import { useTransition } from 'react-spring';

import { addBestPracticeToState } from '@/components/context/actions';
import { Dispatch, State } from '@/components/context/context';
import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { springValues } from './punctuation';

const BestPractice = () => {
    const dispatch = Dispatch();
    const { bestPractice } = State();
    const transition = useTransition(bestPractice, springValues);

    useEffect(() => {
        if (dispatch) {
            addBestPracticeToState(dispatch);
        }
    }, [dispatch]);

    return (
        <PageStyles>
            <GridStyles page="best-practice">
                {transition((animation, item) => (
                    <GridItemStyles style={animation} key={item.title}>
                        <dt>{item.title}</dt>
                        <div>
                            {item.value.map((val) => (
                                <dd key={val} className="paragraphs">
                                    {val}
                                </dd>
                            ))}
                        </div>
                    </GridItemStyles>
                ))}
            </GridStyles>
        </PageStyles>
    );
};

export default BestPractice;
