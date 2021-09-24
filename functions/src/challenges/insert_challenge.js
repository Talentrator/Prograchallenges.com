const functions = require('firebase-functions');
const admin = require('firebase-admin');

const insertChallenge = functions.https.onCall(async (data) => {
    const { text, title, email, nickname, language } = data;
    // use ZOD for this
    if(text === '' || email === '' || nickname === '' || title === '' || language === '')
        throw new Error('invalid-argument', 'All fields are required');

    // please make the id of the challenge-document be similiar to the title
    // so that we can have urls that look like
    // pc.com/challenge/implement-for-loop
    // A solution for this was already implemented in create_new_user.js, please, heavily reuse the code
    await admin.firestore().collection('challenges').add({
        title,
        email,
        nickname,
        text,
        language,
    });
});

module.exports = insertChallenge;