import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import StateProvider from 'components/context/context';
import Page from 'components/Page';
import 'components/styles/font.css';
import GlobalStyles from 'components/styles/GlobalStyles';
import Typography from 'components/styles/Typography';
import { Provider } from 'next-auth/client';
import { AppProps } from 'next/dist/shared/lib/router/router';

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SANITY_URL,
  cache: new InMemoryCache(),
});

const App = (props: AppProps) => (
  <>
    <GlobalStyles />
    <Typography />
    <Provider session={props.pageProps.session}>
      <ApolloProvider client={client}>
        <StateProvider>
          <Page>
            <props.Component {...props.pageProps} />
          </Page>
        </StateProvider>
      </ApolloProvider>
    </Provider>
  </>
);

export default App;
