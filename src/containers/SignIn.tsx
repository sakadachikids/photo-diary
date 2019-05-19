import firebase from "firebase/app";
import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import React from "react";

export default () => {
  React.useEffect(() => {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: (authResult: any, redirectUrl: string) => {
          console.log(authResult);
          console.log(redirectUrl);
          return true;
        },
        uiShown: () => {
          document.getElementById("loader")!.style.display = "none";
        }
      },
      signInSuccessUrl: "/",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      tosUrl: "terms",
      privacyPolicyUrl: "policy"
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }, []);

  return (
    <div>
      <div id="firebaseui-auth-container" />
      <div id="loader">Now Loading...</div>
    </div>
  );
};
