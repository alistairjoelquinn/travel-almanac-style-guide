import { useEffect, useState } from 'react';
import { useTransition } from 'react-spring';
import Head from 'next/head';
import styled from 'styled-components';

import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { Dispatch, State } from '@/components/context/context';
import { addCommonWordsToState } from '@/components/context/actions';
import alphabet from '@/lib/alphabet';
import { springValues } from './punctuation';

const LetterSelectStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 3rem;
    span {
        padding: 0.3rem;
        font-size: 3rem;
    }
`;

const Home = () => {
    const [letter, setLetter] = useState('A');
    const dispatch = Dispatch();
    const { commonWords } = State();
    const displayWords = commonWords.filter((word) => word.category === letter);
    const transition = useTransition(displayWords, springValues);

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
                    {transition((animation, item) => (
                        <GridItemStyles style={animation} key={item.title}>
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
