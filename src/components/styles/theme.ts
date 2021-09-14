import { ThemeOptions } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const themeBase: ThemeOptions = {
    typography: {
        fontFamily: 'MinionBold, Arial',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [
                    {
                        fontFamily: 'MinionBold',
                        fontStyle: 'normal',
                        fontDisplay: 'swap',
                        fontWeight: 400,
                        src: `
                            local('MinionBold'),
                            url('/minion-pro-bold.ttf') format('truetype')
                        `,
                    },
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
    },
};

export const themeLight: ThemeOptions = {
    ...themeBase,
    palette: {
        type: 'light',
    },
};

export const themeDark: ThemeOptions = {
    ...themeBase,
    palette: {
        type: 'dark',
    },
};
