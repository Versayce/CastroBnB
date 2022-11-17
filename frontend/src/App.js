import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotList from './components/Spots/index'
import SpotPage from "./components/SpotPage";
import CurrentUserSpots from "./components/Spots/CurrentUserSpots";
import EditSpotForm from "./components/EditSpotForm/EditSpotForm";

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
          <Route exact path='/spots/edit'>
            <EditSpotForm />
          </Route>
          <Route exact path="/spots/:spotId">
            <SpotPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
