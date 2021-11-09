const functions = require('firebase-functions')
const admin = require('firebase-admin')

const getAllChallenges = functions.https.onCall(async () => {
  let data = [];

  const result = await admin.firestore().collection('challenges').orderBy("creationTime", "desc").get();

  result.forEach(doc => {
    data.push({
      id: doc.id,
      ...doc.data(),
    })
  });

  return data;
})

module.exports = getAllChallenges;