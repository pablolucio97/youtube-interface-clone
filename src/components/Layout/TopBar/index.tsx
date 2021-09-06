import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Hidden from '@material-ui/core/Hidden';

const usestyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
    background: '#fff'
  },
  input: {
    flex: 1,
  },
  rightBox: {
    display: 'flex',
    alignItems: 'center'
  }
}))


export default function TopBar() {

  const classes = usestyles()

  return (
    <AppBar className={classes.root} color='default'>
      <Toolbar className={classes.toolbar}>
        <Box display='flex' alignItems='center'>
          <MenuIcon />
          <img src="/logo-dark.png" alt="Pablo Lucio Youtube clone" className={classes.logo} />
        </Box>
        <Hidden mdDown>
          <Box>
            <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Pesquisar"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box className={classes.rightBox}>
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsIcon />
          <Button
            variant='outlined'
            style={{ margin: '8px' }}
            startIcon={<AccountCircleIcon/>}
            color='secondary'
          >
            Fazer login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}