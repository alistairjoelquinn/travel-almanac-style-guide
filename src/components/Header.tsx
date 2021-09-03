import { AppBar, IconButton, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Brightness7, Brightness4 } from '@material-ui/icons';
import { Dispatch } from 'react';
import { useThemeDispatch, useThemeState } from './context/theme/context';
import { Action } from './context/theme/reducer';

const useStyles = makeStyles({
    headerLinkStyles: {
        flex: 1,
        textDecoration: 'none',
        // color: '#545454',
    },
    iconLight: {
        color: '#d6d6d6',
    },
    iconDark: {
        color: '#9d9d9d',
    },
});

const Header = () => {
    const { currentTheme } = useThemeState();
    const dispatchTheme: Dispatch<Action> = useThemeDispatch();
    const classes = useStyles();

    return (
        <AppBar position="static" square>
            <Toolbar>
                <Typography variant="h5">The Travel Almanac Style Guide</Typography>
                <IconButton
                    className={currentTheme === 'dark' ? classes.iconLight : classes.iconDark}
                    onClick={() => dispatchTheme({ type: 'TOGGLE_THEME' })}
                >
                    {currentTheme === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
