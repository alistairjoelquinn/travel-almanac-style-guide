import type { AppProps } from 'next/app';
import { useTransition, animated } from 'react-spring';

import GlobalStyles from '@/components/styles/GlobalStyles';
import Typography from '@/components/styles/Typography';
import Page from '@/components/Page';
import { StateProvider } from '@/components/context/context';

const App = (props: AppProps) => {
    const transitionItems = [
        {
            id: props.router.route,
            Component: props.Component,
            pageProps: props.pageProps,
        },
    ];

    const transition = useTransition(transitionItems, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        keys: (item) => item.id,
    });

    return (
        <>
            <GlobalStyles />
            <Typography />
            <Page>
                <StateProvider>
                    {transition((styles, { Component, pageProps }) => (
                        <animated.div style={styles}>
                            <Component {...pageProps} />
                        </animated.div>
                    ))}
                </StateProvider>
            </Page>
        </>
    );
};

export default App;
