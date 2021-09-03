import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import Page from '@/components/Page';
import { ColorThemeProvider } from '@/components/context/theme/context';

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <ColorThemeProvider>
            <Page>
                <Component {...pageProps} />
            </Page>
        </ColorThemeProvider>
    );
};

export default App;
