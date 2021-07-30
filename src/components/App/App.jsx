import './App.css';
import Navigation from 'components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'components/HomePage/HomePage';
import MoviesPage from 'components/MoviesPage/MoviesPage';
import NotFoundView from 'components/NotFoundView/NotFoundView';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
