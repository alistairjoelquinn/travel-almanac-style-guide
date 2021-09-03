import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => (
    <AppBar position="static" square>
        <Toolbar>
            <Typography variant="h5">The Travel Almanac Style Guide</Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
