import type { AppProps } from 'next/app';

import GlobalStyles from '@/components/styles/GlobalStyles';
import Typography from '@/components/styles/Typography';
import Page from '@/components/Page';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <GlobalStyles />
        <Typography />
        <Page>
            <Component {...pageProps} />
        </Page>
    </>
);

export default App;
