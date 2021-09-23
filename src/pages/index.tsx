import { useEffect } from 'react';
import { useTransition } from 'react-spring';
import Head from 'next/head';

import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { Dispatch, State } from '@/components/context/context';
import { addCommonWordsToState } from '@/components/context/actions';
import { springValues } from './punctuation';

const Home = () => {
    const dispatch = Dispatch();
    const { commonWords } = State();
    const transition = useTransition(commonWords, springValues);

    useEffect(() => {
        addCommonWordsToState(dispatch);
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>Travel Almanac Style Guide</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
