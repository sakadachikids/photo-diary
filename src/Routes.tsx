import * as React from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home";
import All from "./containers/All";

export default () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/all" compoennt={All} />
    </>
  );
};
