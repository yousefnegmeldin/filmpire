import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    // below code is shown for anything larger than mobile devices, (small)
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
