const functions = require('firebase-functions')
const admin = require('firebase-admin')

const getSingleChallenge = functions.https.onCall(async (data) => {
    return (await admin.firestore().collection('challenges').doc(data.id).get()).docs[0];
});

module.exports = getSingleChallenge;