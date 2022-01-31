const functions = require('firebase-functions')
const admin = require('firebase-admin');

const getQuestions = functions.https.onCall(async({ limit = 10, difficulty = null, programmingLanguage = null } = {}) => {
    let data = [];


    let query = admin.firestore().collection('questions').limit(limit);

    // to help in future to fetch questions based on difficulty
    if (difficulty) query = query.where('difficulty', difficulty);
    // to help in future to fetch questions based on programmingLanguage
    if (programmingLanguage) query = query.where('programmingLanguage', programmingLanguage);


    const result = await query.get()

    result.forEach(doc => {
        data.push({
            id: doc.id,
            ...doc.data(),
        })
    });

    return data;
})

module.exports = getQuestions;