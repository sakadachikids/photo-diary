import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// 初期設定
admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();

const registrationTokens = [
  "d9VADkM7FG4:APA91bG9svQ-Ws03ox5ismNI_YloxnFImJ0UJ2fpzXOq8ifocd2QzdIOSA_NTOIrQWLOAIW6nz04OLfVhgVrN8HsHiyueM96MkICKhzcHPTFwNv4dNjpNzyCQTOnm-eP3wDC-6MGh6Mq"
];

const topicName = "diary";

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
        const uid = data.id;
        // @ts-ignore
        const messageName = data.title;

        const payload = {
          notification: {
            title: "テスト",
            body: messageName
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
  .onCreate((event, snapshot) => {
    admin
      .messaging()
      .subscribeToTopic(registrationTokens, topicName)
      .then(function(response) {
        // See the MessagingTopicManagementResponse reference documentation
        // for the contents of response.
        console.log("Successfully subscribed to topic:", response);
      })
      .catch(function(error) {
        console.log("Error subscribing to topic:", error);
      });
  });
