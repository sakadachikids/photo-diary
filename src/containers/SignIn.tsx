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
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(function(result) {
        history.push(PathName.HOME);
      });
  };

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
