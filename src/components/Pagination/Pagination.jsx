import React from 'react';

import { Typography, Button } from '@mui/material';

import useStyles from './styles';

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const classes = useStyles();

  const handlePrevious = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button onClick={handlePrevious} className={classes.button} variant="contained" color="primary" type="button">Prev</Button>
      <Typography className={classes.pageNumber}>{currentPage}</Typography>
      <Button onClick={handleNext} className={classes.button} variant="contained" color="primary" type="button">Next</Button>
    </div>
  );
};

export default Pagination;
