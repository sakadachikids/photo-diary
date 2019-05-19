import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCmetKqyVejwmtCgdhQRg9Vpz7IN9xHNZU",
  authDomain: "photo-diary-bd1a9.firebaseapp.com",
  projectId: "photo-diary-bd1a9"
});

const getDbInstance = () => {
  return firebase.firestore();
};

export default getDbInstance;
