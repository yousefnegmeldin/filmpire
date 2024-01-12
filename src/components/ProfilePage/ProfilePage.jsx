import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';

const ProfilePage = () => {
  const { user } = useSelector(userSelector);
  const favoriteMovies = [];
  const logOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  // Profile : {user.username}
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logOut}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length
        ? <Typography variant="h5">Add favorites or watchlist some movies!</Typography>
        : (
          <Box>
            Favorite Movies!
          </Box>
        )}
    </Box>
  );
};

export default ProfilePage;
