import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const { data, error, isFetching } = useGetGenresQuery();
  console.log(data);
  const categories = [{ label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' }];

  const demoCategories = [{ label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Animation', value: 'animation' }];

  const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
  const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img className={classes.image} src={theme.palette.mode === 'light' ? blueLogo : redLogo} alt="Filmpire logo" />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src={redLogo} className={classes.genreImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genre</ListSubheader>

        {isFetching
          ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress size="4rem" />
            </Box>
          )
          : data.genres.map(({ name, id }) => (
            <Link key={id} className={classes.links} to="/">
              <ListItem onClick={() => {}} button>
                <ListItemIcon>
                  <img src={genreIcons[name.toLowerCase()]} className={classes.genreImages} height={30} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
      </List>
    </>
  );
};

export default Sidebar;
