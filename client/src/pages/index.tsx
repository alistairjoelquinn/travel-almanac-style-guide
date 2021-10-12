import { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { Dispatch, State } from '@/components/context/context';
import { addCommonWordsToState } from '@/components/context/actions';
import alphabet from '@/lib/alphabet';

interface StyleProps {
    indexVal: number | string;
}

const LetterSelectStyles = styled.div<StyleProps>`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
    padding: 0 1rem;
    span {
        height: 2.5rem;
        font-size: 2.5rem;
        cursor: pointer;
        background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 2px no-repeat;
        transition: 0.5s;
        &:nth-child(${(p) => p.indexVal}) {
            --d: 100%;
        }
    }
`;

const Home = () => {
    const [letter, setLetter] = useState(['A', 1]);
    const dispatch = Dispatch();
    const { commonWords } = State();
    const displayWords = commonWords.filter((word) => word.category === letter[0]);

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
            <LetterSelectStyles indexVal={letter[1]}>
                {alphabet.map((alph, i) => (
                    <span key={alph} onClick={() => setLetter([alph, i + 1])}>
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
