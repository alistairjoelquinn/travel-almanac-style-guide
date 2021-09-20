import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { useTransition } from 'react-spring';

import bestPractise from '../../content/best-practise.json';
import { springValues } from './punctuation';

const BestPractise = () => {
    const transition = useTransition(bestPractise, springValues);

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
