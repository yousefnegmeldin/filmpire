import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useStyles from './styles';
import Sidebar from '../Sidebar/Sidebar';
import { ColorModeContext } from '../../utils/ToggleColorMode';
import { setUser, userSelector } from '../../features/auth';
import { fetchToken, createSessionId, moviesApi } from '../../utils/index';
import Search from '../Search/Search';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, user } = useSelector(userSelector);

  const token = localStorage.getItem('request_token');
  const sessionIdLocalStorage = localStorage.getItem('session_id');
  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdLocalStorage) {
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdLocalStorage}`);
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData));
        }
      }
    };

    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton color="inherit" edge="start" style={{ outline: 'none' }} onClick={() => setMobileOpen((mobileOpen) => !mobileOpen)} className={classes.menuButton}>
            <Menu />
          </IconButton>
          )}
          <IconButton color="inherit" sx={isMobile ? { ml: 4 } : { ml: 1 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button sx={{ textTransform: 'lowercase' }} color="inherit" component={Link} to={`/profile/${user.id}`} className={classes.linkButton} onClick={() => {}}>
                {!isMobile && <>{user.username ? <>{JSON.stringify(user.username).slice(1, JSON.stringify(user.username).length - 1)} &nbsp;</> : <>My Movies &nbsp;</>}</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
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
