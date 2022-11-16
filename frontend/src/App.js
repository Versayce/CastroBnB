import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotList from './components/Spots/index'
import SpotPage from "./components/SpotPage";
import CreateSpotForm from "./components/CreateSpotFormModal/CreateSpotForm";
import CurrentUserSpots from "./components/Spots/CurrentUserSpots";

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
          <Route path="/spots/:spotId">
            <SpotPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
