import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import formatting from '../../content/quick-formatting.json';

const QuickFormatting = () => (
    <PageStyles>
        <GridStyles>
            {formatting.map((item) => (
                <GridItemStyles key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.value}</dd>
                </GridItemStyles>
            ))}
        </GridStyles>
    </PageStyles>
);

export default QuickFormatting;
