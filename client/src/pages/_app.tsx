import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import StateProvider from 'components/context/context';
import Page from 'components/Page';
import 'components/styles/font.css';
import GlobalStyles from 'components/styles/GlobalStyles';
import Typography from 'components/styles/Typography';
import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import { animated, useTransition } from 'react-spring';

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SANITY_URL,
  cache: new InMemoryCache(),
});

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
      <Provider session={props.pageProps.session}>
        <ApolloProvider client={client}>
          <StateProvider>
            <Page>
              {transition((styles, { Component, pageProps }) => (
                <animated.div style={styles}>
                  <Component {...pageProps} />
                </animated.div>
              ))}
            </Page>
          </StateProvider>
        </ApolloProvider>
      </Provider>
    </>
  );
};

export default App;
