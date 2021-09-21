import { useTransition } from 'react-spring';
import Head from 'next/head';

import { GridItemStyles, GridStyles, PageStyles } from '@/components/styles/CardPageStyles';
import commonWords from '../../content/common-words.json';
import { springValues } from './punctuation';

const Home = () => {
    const transition = useTransition(commonWords, springValues);

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
                            <dd>{item.value}</dd>
                        </GridItemStyles>
                    ))}
                </GridStyles>
            </PageStyles>
        </>
    );
};

export default Home;
