const functions = require('firebase-functions')
const admin = require('firebase-admin')

const getSingleChallenge = () => functions.https.onCall(async (data) => {
    let response = {};
    let comments = [];

    await admin.firestore().collection('challenges').doc(data.id).get().then(async (querySnapshot) => {

        response = querySnapshot.data();

        await admin.firestore().collection('comments').where('challengeId', '==', data.id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                comments.push(doc.data())
            })
            response = {...response, comments}
        });
        
        return response;
    })
})

module.exports = getSingleChallenge