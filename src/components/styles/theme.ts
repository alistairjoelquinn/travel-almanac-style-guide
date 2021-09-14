import { ThemeOptions } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

export const themeLight: ThemeOptions = {
    typography: {
        fontFamily: 'Minion, Arial',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [
                    {
                        fontFamily: 'Minion',
                        fontStyle: 'normal',
                        fontDisplay: 'swap',
                        fontWeight: 400,
                        src: `
                            local('Minion'),
                            url('/minion-pro-condensed.ttf') format('truetype')
                        `,
                    },
                ],
            },
        },
    },
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        type: 'light',
    },
};

export const themeDark: ThemeOptions = {
    palette: {
        type: 'dark',
    },
};
