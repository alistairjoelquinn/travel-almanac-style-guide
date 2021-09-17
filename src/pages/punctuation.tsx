import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { useTransition, config } from 'react-spring'

import punctuation from '../../content/punctuation.json';

interface Punctuation {
    title: string;
    value: string;
}

const Punctuation = () => {
    const transition = useTransition(punctuation, {
        from: { opacity: 0, transform: 'translate3d(0,4rem,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-4rem,0)' },
        trail: 100,
        config: {mass:1, tension:200, friction:10, clamp: true},
    });

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
