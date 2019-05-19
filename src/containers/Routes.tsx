import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import All from "./All";

export const PathName = {
  HOME: "/",
  ALL: "/all"
};

export default () => (
  <>
    <Route exact path={PathName.HOME} component={Home} />
    <Route exact path={PathName.ALL} compoennt={All} />
  </>
);
