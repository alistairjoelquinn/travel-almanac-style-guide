import Header from '@/components/Header';
import { CssBaseline, Paper } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import { themeLight, themeDark } from '@/components/styles/theme';
import { useThemeState } from '@/components/context/theme/context';

const Page: React.FC = ({ children }) => {
    const { currentTheme } = useThemeState();

    const light = createTheme(themeLight);
    const dark = createTheme(themeDark);

    return (
        <ThemeProvider theme={currentTheme === 'light' ? light : dark}>
            <CssBaseline />
            <Paper square>
                <Header />
                {children}
            </Paper>
        </ThemeProvider>
    );
};

export default Page;
