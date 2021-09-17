import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { useEffect, useState } from 'react';
import { useTransition, animated, config } from 'react-spring'

import punctuation from '../../content/punctuation.json';

interface Punctuation {
    title: string;
    value: string;
}

const Punctuation = () => {
    const [punc, setPunc] = useState<Punctuation[]>([]);

    const transition = useTransition(punc, {
        from: { opacity: 0, transform: 'translate3d(0,+40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        delay: 200,
        config: config.wobbly,
      })

    useEffect(() => {
        setPunc(punctuation)
    }, [punctuation])

    return <PageStyles>
        <GridStyles page="punctuation">
            {transition((animation, item) => (
                <GridItemStyles style={animation} key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.value}</dd>
                </GridItemStyles>
            ))}
        </GridStyles>
    </PageStyles>
};

export default Punctuation;
