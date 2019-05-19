import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// 初期設定
admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();

// Push通知を打つ
exports.sendNotifications = functions.firestore
  .document("/diaries/{diaryId}")
  .onCreate((event, snapshot) => {
    // 該当のデータが更新されるとフックする
    const topic = "/topics/" + "diary";

    // フックした時のデータを取得する
    const diaryId = snapshot.params.diaryId;
    // const messageId = snapshot.params.messageId;

    // 取得したらFirestoreにデータを取得しにいく
    const messageRef = firestore.doc("diaries/" + diaryId);

    return messageRef
      .get()
      .then(message => {
        // 取得できたらここが呼ばれる
        const data = message.data();
        // @ts-ignore
        const messageName = data.title;
        // @ts-ignore
        const messageDescription = data.description;

        const payload = {
          notification: {
            title: messageName,
            body: messageDescription
          }
        };

        const option = {
          priority: "high"
        };

        return admin
          .messaging()
          .sendToTopic(topic, payload, option)
          .then(function(response) {
            console.log("Successfully sent message:", response);
          })
          .catch(function(error) {
            console.log("Error sending message:", error);
          });
      })
      .catch(e => {
        console.log(e);
      });
  });

// Subscribe the devices corresponding to the registration tokens to the
// topic.
// @ts-ignore
exports.addTopic = functions.firestore
  .document("/users/{userId}")
  .onUpdate((event, snapshot) => {
    const fcmTokenId = snapshot.params.fcmToken;
    const topicName = "diary";

    admin
      .messaging()
      .subscribeToTopic(fcmTokenId, topicName)
      .then(function(response) {})
      .catch(function(error) {});
  });
