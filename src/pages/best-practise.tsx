import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import bestPractise from '../../content/best-practise.json';

const BestPractise = () => (
    <PageStyles>
        <GridStyles>
            {bestPractise.map((item) => (
                <GridItemStyles key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.value}</dd>
                </GridItemStyles>
            ))}
        </GridStyles>
    </PageStyles>
);

export default BestPractise;
