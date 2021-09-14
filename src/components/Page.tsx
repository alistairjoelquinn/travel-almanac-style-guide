import Header from '@/components/Header';
import { CssBaseline, Paper, makeStyles } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import { themeLight, themeDark } from '@/components/styles/theme';
import { useThemeState } from '@/components/context/theme/context';

const useStyles = makeStyles({
    mainPageArea: {
        border: '10px solid #d64429',
        minHeight: '100vh',
        backgroundColor: '#F0F0F0',
    },
});

const Page: React.FC = ({ children }) => {
    const classes = useStyles();
    const { currentTheme } = useThemeState();

    const light = createTheme(themeLight);
    const dark = createTheme(themeDark);

    return (
        <ThemeProvider theme={currentTheme === 'light' ? light : dark}>
            <CssBaseline />
            <Paper className={classes.mainPageArea} square>
                <Header />
                {children}
            </Paper>
        </ThemeProvider>
    );
};

export default Page;
