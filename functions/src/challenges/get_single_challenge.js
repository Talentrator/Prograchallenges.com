const functions = require('firebase-functions')
const admin = require('firebase-admin')

const getSingleChallenge = functions.https.onCall(async (data) => {
    let response = {};
    let comments = [];
    // actual document of the challenge
    response = (await admin.firestore().collection('challenges').doc(data.id).get()).data();

    // challenge comments
    const querySnapshot = await admin.firestore().collection('comments').where('challengeId', '==', data.id).get();
    querySnapshot.forEach((doc) => {
        comments.push(doc.data())
    });
    
    response = {...response, comments};
    return response;
});

module.exports = getSingleChallenge;