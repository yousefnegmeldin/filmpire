import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useStyles from './styles';
import Sidebar from '../Sidebar/Sidebar';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAuthenticated = true;
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton color="inherit" edge="start" style={{ outline: 'none' }} onClick={() => setMobileOpen((mobileOpen) => !mobileOpen)} className={classes.menuButton}>
            <Menu />
          </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/profile/:id" className={classes.linkButton} onClick={() => {}}>
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                />
              </Button>
            )}
          </div>
          {isMobile && 'Search'}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((mobileOpen) => !mobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
