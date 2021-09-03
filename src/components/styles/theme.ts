import { ThemeOptions } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

export const themeLight: ThemeOptions = {
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
