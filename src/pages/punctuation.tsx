import styled from 'styled-components';
import punctuation from '../../content/punctuation.json';

const PageStyles = styled.div`
    padding: 2rem;
`;

const GridStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const GridItemStyles = styled.dl`
    border: 1px solid black;
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin: 4rem;
    margin-top: 2rem;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    dt {
        align-self: flex-start;
        margin-bottom: 1rem;
        font-weight: bold;
    }
    dd {
        align-self: flex-end;
        text-align: left;
    }
`;

const Punctuation = () => {
    console.log('punc');

    return (
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
};

export default Punctuation;
