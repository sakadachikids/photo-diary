import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import All from "./All";

export const PathName = {
  HOME: "/",
  ALL: "/all",
  SIGN_IN: "/signin"
};

export default () => (
  <>
    <Route exact path={PathName.HOME} component={Home} />
    <Route exact path={PathName.ALL} compoennt={All} />
    <Route exact path={PathName.SIGN_IN} component={SignIn} />
  </>
);
