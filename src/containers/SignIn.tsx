import firebase from "firebase/app";
import React from "react";
import * as Mat from "@material-ui/core";
import {
  createStyles,
  withStyles,
  Theme,
  WithStyles
} from "@material-ui/core/styles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { PathName } from "./Routes";
import { useLocalStorage } from "react-use";
import getDbInstance from "../getDbInstance";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      height: "100vh",
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    title: {
      height: "60%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white"
    },
    signin: {
      height: "40%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  });

type Props = WithStyles<typeof styles> & RouteComponentProps;

const SignIn = withRouter(({ classes, history }: Props) => {
  const [_, setUser] = useLocalStorage("user", null);
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(function(result) {
        history.push(PathName.HOME);
      });
  };

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
          db.collection("users").add(user);
          history.push(PathName.HOME);
        } else {
          history.push(PathName.SIGN_IN);
        }
      });
  };

  React.useEffect(() => {
    initApp();
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Photo Diary</h1>
      </div>
      <div className={classes.signin}>
        <Mat.Button onClick={signIn} color="secondary" variant="contained">
          ログインする
        </Mat.Button>
      </div>
    </div>
  );
});

export default withStyles(styles)(SignIn);
