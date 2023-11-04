const admin = require("firebase-admin");
const { getAuth } = require("firebase-admin/auth");

const serviceAccount = require("./the-chat-app-45151-firebase-adminsdk-48tzh-714fe63ad5.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = getAuth(app);

module.exports = {
  app,
  auth,
};
