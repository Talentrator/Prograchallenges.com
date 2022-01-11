const functions = require('firebase-functions')
const admin = require('firebase-admin');

const updateChallenge = functions.https.onCall(async(docId, data) => {
    return adminUpdateChallenge(docId, data);
});

const adminUpdateChallenge = async(docId, data) => {
    let challenge = {};

    return await admin.firestore().collection('challenges').doc(docId).update(data);
}

module.exports = { updateChallenge, adminUpdateChallenge };