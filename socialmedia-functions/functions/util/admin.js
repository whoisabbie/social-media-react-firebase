const admin = require("firebase-admin");

var serviceAccount = require("../key/firebase-service-account-file.json.json");

// your project db url will be in your firebase config file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "",
});

const db = admin.firestore();

module.exports = { admin, db };
