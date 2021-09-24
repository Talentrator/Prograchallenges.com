const functions = require('firebase-functions');
const admin = require('firebase-admin');

const insertChallenge = functions.https.onCall(async (data) => {
    const { text, title, email, nickname, text, language } = data;
    // use ZOD for this
    if(text === '' || email === '' || nickname === '' || title === '' || language === '')
        throw new Error('invalid-argument', 'All fields are required');

    await admin.firestore().collection('challenges').add({
        title,
        email,
        nickname,
        text,
        language,
    });
});

module.exports = insertChallenge;