import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles, Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../utils/images/logo.jpeg';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 65,
  },
}));

const Header = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar variant="dense" >
        <RouterLink to="/">
          <Grid item xs={4} >
            <img src={logo} alt='' style={{height: '55px', width: '100px'}}>
            </img>
          </Grid>
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <div style={{
        backgroundColor: '#F78B11',
        width: '100%',
        height: '2px',
      }}>
      </div>
    </AppBar>

  );
};

Header.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default Header;
