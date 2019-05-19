import firebase from "firebase";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  });
}

const getDbInstance = () => {
  return firebase.firestore();
};

export const initializeFCM = async (user: any) => {
  const messaging = firebase.messaging();

  messaging.usePublicVapidKey(
    "BI28glpT6KKmgZf0EI6eOq9MPDfmyqOGSTMQS3gQUtq_Loxc-VN07MTgERl6GIW2UZgkrGxxwMqvt5kLtF6kY0A"
  );

  await messaging.requestPermission();
  const token = await messaging.getToken();
  await getDbInstance()
    .collection("users")
    .doc(user.uid)
    .set({ fcmToken: token }, { merge: true });
};

export default getDbInstance;
