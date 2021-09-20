import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { useTransition } from 'react-spring';

import formatting from '../../content/quick-formatting.json';
import { springValues } from './punctuation';

const QuickFormatting = () => {
    const transition = useTransition(formatting, springValues);

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
