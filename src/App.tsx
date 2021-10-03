import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'
import HeroList from './components/HeroList';
import HeroProfile from './components/HeroProfile';
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route path="/heroes">
                <HeroList />
                    <Route path='/heroes/:heroId'>
                        <HeroProfile />
                    </Route>
            </Route>
            <Redirect to="/heroes" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;