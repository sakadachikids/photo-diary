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
        setUser(result.user);
      });
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
    </React.Fragment>
  );
};
