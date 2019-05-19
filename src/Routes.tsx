import * as React from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home";

export default () => {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  );
};
