import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HeroList from './HeroList';
import HeroProfile from './HeroProfile';


const App = () => {
  return (
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
  );
}

export default App;