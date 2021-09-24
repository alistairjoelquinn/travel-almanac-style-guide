import { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { Dispatch, State } from '@/components/context/context';
import { addCommonWordsToState } from '@/components/context/actions';
import alphabet from '@/lib/alphabet';

const LetterSelectStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 3rem;
    padding: 0 1rem;
    span {
        padding: 0.3rem;
        font-size: 3rem;
        cursor: pointer;
    }
`;

const Home = () => {
    const [letter, setLetter] = useState('A');
    const dispatch = Dispatch();
    const { commonWords } = State();
    const displayWords = commonWords.filter((word) => word.category === letter);

    useEffect(() => {
        if (dispatch) {
            addCommonWordsToState(dispatch);
        }
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>Travel Almanac Style Guide</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LetterSelectStyles>
                {alphabet.map((alph) => (
                    <span key={alph} onClick={() => setLetter(alph)}>
                        {alph}
                    </span>
                ))}
            </LetterSelectStyles>
            <PageStyles>
                <GridStyles page="common-words">
                    {displayWords.map((item) => (
                        <GridItemStyles key={item.title}>
                            <dt>{item.title}</dt>
                            {item.value && <dd>{item.value}</dd>}
                        </GridItemStyles>
                    ))}
                </GridStyles>
            </PageStyles>
        </>
    );
};

export default Home;
