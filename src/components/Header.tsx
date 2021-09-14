import { AppBar, IconButton, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Brightness7, Brightness4 } from '@material-ui/icons';
import { Dispatch } from 'react';
import { useThemeDispatch, useThemeState } from './context/theme/context';
import { Action } from './context/theme/reducer';

const useStyles = makeStyles({
    appBar: {
        height: '15vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0',
    },
    headerLinkStyles: {
        display: 'flex',
        justifyContent: 'center',
        color: '#d6d6d6',
        backgroundColor: '#F0F0F0',
    },
    headerText: {
        color: '#000000',
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        paddingTop: '0.3rem',
        fontSize: '2rem',
    },
    iconLight: {
        color: '#d6d6d6',
    },
    iconDark: {
        color: '#9d9d9d',
    },
});

const Header = () => {
    // const { currentTheme } = useThemeState();
    // const dispatchTheme: Dispatch<Action> = useThemeDispatch();
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" square>
            <Toolbar className={classes.headerLinkStyles}>
                <Typography className={classes.headerText} variant="h5">
                    THE TRAVEL ALMANAC STYLE GUIDE
                </Typography>
                {/* <IconButton
                    className={currentTheme === 'dark' ? classes.iconLight : classes.iconDark}
                    onClick={() => dispatchTheme({ type: 'TOGGLE_THEME' })}
                >
                    {currentTheme === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton> */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
