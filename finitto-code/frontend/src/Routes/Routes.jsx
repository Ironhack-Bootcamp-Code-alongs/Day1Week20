import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../pages";

export const Routes = (props) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(o) => <HomePage {...o} addImage={props.addImage} />}
      />
    </Switch>
  );
};
