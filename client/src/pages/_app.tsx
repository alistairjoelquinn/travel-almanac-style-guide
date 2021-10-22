import type { AppProps } from 'next/app';
import { useTransition, animated } from 'react-spring';
import { Provider, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import GlobalStyles from '@/components/styles/GlobalStyles';
import Typography from '@/components/styles/Typography';
import Page from '@/components/Page';
import { StateProvider } from '@/components/context/context';
import '@/components/styles/font.css';

const App = (props: AppProps) => {
    const [session] = useSession();
    const router = useRouter();

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

    if (!session && router.pathname !== '/signin') {
        if (typeof window !== 'undefined') {
            window.location.replace('/signin');
            return null;
        }
    }

    return (
        <>
            <GlobalStyles />
            <Typography />
            <Provider session={props.pageProps.session}>
                <StateProvider>
                    <Page>
                        {transition((styles, { Component, pageProps }) => (
                            <animated.div style={styles}>
                                <Component {...pageProps} />
                            </animated.div>
                        ))}
                    </Page>
                </StateProvider>
            </Provider>
        </>
    );
};

export default App;
