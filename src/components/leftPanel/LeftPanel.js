import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate, useLocation} from 'react-router-dom';
import {
  Box, Button, Divider, Drawer, Hidden, List, makeStyles,
  TextField, Typography, Grid,
} from '@material-ui/core';
import {
  Search, Compare,
} from '@material-ui/icons';
import NavItem from './NavItem';
import overrallIcon from '../../utils/images/overrall.png';
import atackIcon from '../../utils/images/attack.png';
import deffenceIcon from '../../utils/images/defence.png';
import magicIcon from '../../utils/images/magic5.png';
import cookIcon from '../../utils/images/cook.png';
import craftIcon from '../../utils/images/crafting.png';


const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 61,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
  divider: {
    background: '#777777',
  },
  MuiGrid: {
    item: {
      padding: '2px !important',
    },
  },
  imageIcon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit',
  },
}));


const LeftPanel = ({onMobileClose, openMobile}) => {
  const [searchText, setSearchText] = useState(null);
  const [sourceUser, setSourceUser] = useState(null);
  const [targetUser, setTargetUser] = useState(null);
  const navigate = useNavigate();
  const formRef = React.useRef();
  const formRefCopmpare = React.useRef();

  const classes = useStyles();
  const location = useLocation();

  const appMenu = [
    {
      href: '/game-scoreboard-ui/overall',
      icon: overrallIcon,
      title: 'Overall',
    },
    {
      href: '/game-scoreboard-ui/attack',
      icon: atackIcon,
      title: 'Attack',
    },
    {
      href: '/game-scoreboard-ui/defense',
      icon: deffenceIcon,
      title: 'Defense',
    },
    {
      href: '/game-scoreboard-ui/magic',
      icon: magicIcon,
      title: 'Magic',
    },
    {
      href: '/game-scoreboard-ui/cooking',
      icon: cookIcon,
      title: 'Cooking',
    },
    {
      href: '/game-scoreboard-ui/crafting',
      icon: craftIcon,
      title: 'Crafting',
    },
  ];

  const items = appMenu;

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleClick = (evt) => {
    evt.preventDefault();
    const name = searchText;
    setSearchText('');
    navigate('/game-scoreboard-ui/player', {state: {name}});
  };

  const handleCompare = (evt) => {
    evt.preventDefault();
    const sourceUserName = sourceUser;
    const targetUserName = targetUser;
    setSourceUser('');
    setTargetUser('');
    navigate('/game-scoreboard-ui/compareplayers',
        {state: {sourceUserName, targetUserName}});
  };


  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Divider classes={{root: classes.divider}}/>

      <Box p={1}>
        <Grid container spacing={1}>
          <Grid item xs={11}>
            <Typography
              align="left"
              color="textPrimary"
              variant="h4"
            >
              Search Player
            </Typography>
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <form ref={formRef} onSubmit={handleClick}>
              <Grid item xs={11}>
                <TextField
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  value={searchText}
                  placeholder="Player Name"
                  variant="outlined"
                  required={true}
                  type="string"
                  inputProps={{
                    style: {
                      padding: 5,
                    },
                  }}
                />
              </Grid>
              <br></br>
              <Grid item xs={11}>
                <Button variant="contained"
                  color="primary"
                  endIcon={<Search/>}
                  type="submit"
                  size= 'small' onClick={() => formRef.current.reportValidity()}
                >
              Search
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>


      <Divider classes={{root: classes.divider}}/>

      <Box p={1}>
        <Grid container spacing={1}>
          <Grid item xs={11}>
            <Typography
              align="left"
              color="textPrimary"
              variant="h4"
            >
              Compare Players
            </Typography>
          </Grid>
          <br></br>

          <form ref={formRefCopmpare} onSubmit={handleCompare}>
            <Grid item xs={11}>
              <TextField
                onChange={(e) => {
                  setSourceUser(e.target.value);
                }}
                value={sourceUser}
                placeholder="Player 1"
                variant="outlined"
                required
                type="string"
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
              />
            </Grid>
            <br></br>
            <Grid item xs={11}>
              <TextField
                onChange={(e) => {
                  setTargetUser(e.target.value);
                }}
                value={targetUser}
                placeholder="Player 2"
                variant="outlined"
                required
                type="string"
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
              />
            </Grid>
            <br></br>
            <Grid item xs={11}>
              <Button variant="contained"
                color="primary"
                endIcon={<Compare/>}
                type="submit"
                onClick={() => formRefCopmpare.current.reportValidity()}
              >Compare</Button>
            </Grid>
          </form>
        </Grid>
      </Box>


    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{paper: classes.mobileDrawer}}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{paper: classes.desktopDrawer}}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

LeftPanel.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

LeftPanel.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default LeftPanel;
