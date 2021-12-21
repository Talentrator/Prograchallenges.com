const functions = require('firebase-functions')
const admin = require('firebase-admin');
const sortOptions = require('./helpers/sort_options');

const getAllChallenges = functions.https.onCall(async(options) => {
    let data = [];

    const sortBy = options ? options.sortBy : "date_desc";

    const sort = sortOptions[sortBy];

    const result = await admin.firestore().collection('challenges').orderBy(sort.field, sort.method).get();

    result.forEach(doc => {
        data.push({
            id: doc.id,
            ...doc.data(),
        })
    });

    return data;
})

module.exports = getAllChallenges;