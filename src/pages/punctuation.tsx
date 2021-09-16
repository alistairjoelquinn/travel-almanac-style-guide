import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import punctuation from '../../content/punctuation.json';

const Punctuation = () => (
    <PageStyles>
        <GridStyles>
            {punctuation.map((item) => (
                <GridItemStyles key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.value}</dd>
                </GridItemStyles>
            ))}
        </GridStyles>
    </PageStyles>
);

export default Punctuation;
