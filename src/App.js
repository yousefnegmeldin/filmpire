
import './App.css';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { Actors, Movies, NavBar, MovieInformation, ProfilePage } from './components';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/" exact>
            <Movies />
          </Route>
          <Route path="/movie/:id" exact>
            <MovieInformation />
          </Route>
          <Route path="/actors/:id" exact>
            <Actors />
          </Route>
          <Route path="/profile/:id" exact>
            <ProfilePage />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
