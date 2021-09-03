import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Brightness7, Brightness4 } from '@material-ui/icons';
import { Dispatch } from 'react';
import { useThemeDispatch, useThemeState } from './context/theme/context';
import { Action } from './context/theme/reducer';

const Header = () => {
    const { currentTheme } = useThemeState();
    const dispatchTheme: Dispatch<Action> = useThemeDispatch();
    console.log('dispatchTheme: ', dispatchTheme);

    return (
        <AppBar position="static" square>
            <Toolbar>
                <Typography variant="h5">The Travel Almanac Style Guide</Typography>
                <div onClick={() => dispatchTheme({ type: 'TOGGLE_THEME' })}>
                    {currentTheme === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
