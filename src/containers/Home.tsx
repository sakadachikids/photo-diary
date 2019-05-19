import React from "react";
import DiaryList from "../components/DiaryList";
import AddDiary from "./AddDiary";
import { useDiaryContext } from "../diary";
import firebase from "firebase/app";
import "firebaseui/dist/firebaseui.css";
import SignIn from "./SignIn";

export default () => {
  const { diaries } = useDiaryContext();
  const [user, setUser] = React.useState<any>(null);
  const initApp = function() {
    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        console.log(result);
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      });
    firebase.auth().onAuthStateChanged(
      function(user) {
        console.log(user);
        if (user) {
          setUser(user);
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var uid = user.uid;
          var phoneNumber = user.phoneNumber;
          var providerData = user.providerData;
          user.getIdToken().then(function(accessToken) {
            document.getElementById("sign-in-status")!.textContent =
              "Signed in";
            document.getElementById("sign-in")!.textContent = "Sign out";
            document.getElementById(
              "account-details"
            )!.textContent = JSON.stringify(
              {
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
              },
              null,
              "  "
            );
          });
        } else {
          // User is signed out.
          document.getElementById("sign-in-status")!.textContent = "Signed out";
          document.getElementById("sign-in")!.textContent = "Sign in";
          document.getElementById("account-details")!.textContent = "null";
        }
      },
      function(error) {
        console.log(error);
      }
    );
  };
  React.useEffect(() => {
    initApp();
  }, []);
  return (
    <React.Fragment>
      {(() => {
        if (user) {
          return (
            <React.Fragment>
              <DiaryList diaries={diaries} />
              <AddDiary />
            </React.Fragment>
          );
        } else {
          return <SignIn />;
        }
      })()}
      <div id="sign-in-status" />
      <div id="sign-in" />
      <pre id="account-details" />
    </React.Fragment>
  );
};
