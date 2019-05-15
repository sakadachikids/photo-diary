import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: ""
});

const getDbInstance = () => {
  return firebase.firestore();
};

export default getDbInstance;
