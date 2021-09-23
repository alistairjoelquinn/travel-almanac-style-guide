import { useEffect } from 'react';
import { useTransition } from 'react-spring';
import Head from 'next/head';

import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import { CommonWordsDispatch, CommonWordsState } from '@/components/context/context';
import { springValues } from './punctuation';

const Home = () => {
    const dispatch = useFriendsDispatch();
    const friends = useFriendsState().users?.filter((user) => user.accepted === true);
    const transition = useTransition(commonWords, springValues);

    useEffect(() => {}, []);

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
