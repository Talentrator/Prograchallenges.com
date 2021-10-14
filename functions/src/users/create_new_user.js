const functions = require("firebase-functions");
const admin = require("firebase-admin");
// TODO: Create schemes
// const {
//   ZODScreateNewUser,
//   ZODSsocialLoginNewUser,
// } = require("../../tools/schemes");
const generateUniqueId = require("../../tools/generate_unique_id");

async function signupNewUser(uid, user) {
  return admin.auth().createUser({
    uid,
    email: user.email,
    password: user.password,
  });
}
