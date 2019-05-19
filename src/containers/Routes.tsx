import React from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import All from "./All";
import firebase from "firebase/app";
import getDbInstance from "../getDbInstance";
import { useLocalStorage } from "react-use";

export const PathName = {
  HOME: "/",
  ALL: "/all",
  SIGN_IN: "/signin"
};

export default withRouter(({ history, location }: RouteComponentProps) => {
  const [user, setUser] = useLocalStorage("user", null);
  const initApp = () => {
    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const token = result.credential.accessToken;
        }
        // The signed-in user info.
        if (result.user) {
          setUser(result.user);
          const user = {
            email: result.user.email,
            photo: result.user.photoURL,
            id: result.user.uid
          };
          const db = getDbInstance();
          db.collection("users")
            .doc(result.user.uid)
            .set(user);
          history.push(PathName.HOME);
        } else {
          history.push(PathName.SIGN_IN);
        }
      });
  };

  React.useEffect(() => {
    if (!user) {
      initApp();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Route exact path={PathName.HOME} component={Home} />
      <Route exact path={PathName.ALL} compoennt={All} />
      <Route exact path={PathName.SIGN_IN} component={SignIn} />
    </>
  );
});
