import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

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
        borderTop: '2px solid black',
        borderBottom: '2px solid black',
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
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" square>
            <Toolbar className={classes.headerLinkStyles}>
                <Typography className={classes.headerText} variant="h5">
                    THE TRAVEL ALMANAC STYLE GUIDE
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
