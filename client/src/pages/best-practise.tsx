import { useEffect } from 'react';
import { useTransition } from 'react-spring';

import { addBestPractiseToState } from '@/components/context/actions';
import { Dispatch, State } from '@/components/context/context';
import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { springValues } from './punctuation';

const BestPractise = () => {
    const dispatch = Dispatch();
    const { bestPractise } = State();
    const transition = useTransition(bestPractise, springValues);

    useEffect(() => {
        if (dispatch) {
            addBestPractiseToState(dispatch);
        }
    }, [dispatch]);

    return (
        <PageStyles>
            <GridStyles page="best-practise">
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

export default BestPractise;
