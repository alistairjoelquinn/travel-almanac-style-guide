import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import Page from '@/components/Page';
import { themeLight, themeDark } from '@/components/styles/theme';
import { useThemeState } from '@/components/context/theme/context';

const App = ({ Component, pageProps }: AppProps) => {
    const { currentTheme } = useThemeState();
    console.log('currentTheme: ', currentTheme);

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Page>
                <ThemeProvider theme={currentTheme === 'light' ? themeLight : themeDark}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Page>
        </>
    );
};

export default App;
