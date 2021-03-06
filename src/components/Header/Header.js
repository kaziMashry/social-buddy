import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" style={{position: "fixed", top: "0"}}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Social Buddy
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;