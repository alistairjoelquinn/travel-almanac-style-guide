import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useWindowSize } from '@react-hook/window-size';

import { Dispatch, State } from '@/components/context/context';
import { addCommonWordsToState } from '@/components/context/actions';
import alphabet from '@/lib/alphabet';
import { useContainerPosition, useMasonry, usePositioner, useResizeObserver, useScroller } from 'masonic';
import { Words } from '@/components/context/models';
import { BasicCard } from './punctuation';

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
    @media (max-width: 700px) {
        width: 15%;
        height: auto;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 10px;
        margin-left: 10px;
        span {
            margin-bottom: 15px;
        }
    }
`;

const CommonWordsContainerStyles = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (max-width: 700px) {
        flex-direction: row;
    }
`;

const CommonWordsStyles = styled.div`
    padding: 0 2rem;
    @media (max-width: 700px) {
        width: 85%;
    }
`;

const Home = () => {
    const [letter, setLetter] = useState(['A', 1]);
    const [words, setWords] = useState<Words[]>([]);
    const dispatch = Dispatch();
    const { commonWords } = State();

    const containerRef = useRef(null);
    const [windowWidth, height] = useWindowSize();
    const { offset, width } = useContainerPosition(containerRef, [windowWidth, height]);
    const { scrollTop, isScrolling } = useScroller(offset);
    const positioner = usePositioner({ width, columnGutter: 8, columnWidth: 300 }, [words.length]);
    const resizeObserver = useResizeObserver(positioner);

    useEffect(() => {
        console.log('changing');
        setWords(commonWords?.filter((word) => word.category === letter[0]));
    }, [letter, commonWords]);

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
            <CommonWordsContainerStyles>
                <LetterSelectStyles indexVal={letter[1]}>
                    {alphabet.map((alph, i) => (
                        <span key={alph} onClick={() => setLetter([alph, i + 1])}>
                            {alph}
                        </span>
                    ))}
                </LetterSelectStyles>
                <CommonWordsStyles>
                    {useMasonry({
                        positioner,
                        scrollTop,
                        isScrolling,
                        height,
                        containerRef,
                        items: words,
                        overscanBy: 5,
                        resizeObserver,
                        render: BasicCard,
                    })}
                </CommonWordsStyles>
            </CommonWordsContainerStyles>
        </>
    );
};

export default Home;
