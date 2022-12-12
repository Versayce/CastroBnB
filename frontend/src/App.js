import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotList from './components/Spots/index'
import SpotPage from "./components/SpotPage";
import CurrentUserSpots from "./components/Spots/CurrentUserSpots";
import './index.css'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SpotList />
          </Route>

          <Route exact path="/spots/current">
            <CurrentUserSpots />
          </Route>

          <Route exact path="/spots/:spotId">
            <SpotPage />
          </Route>

          <h1>404: Not Found</h1>
        </Switch>
      )}
    </>
  );
}

export default App;
