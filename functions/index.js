const functions = require('firebase-functions');
const admin = require('firebase-admin')
const data = require('./data')
const comments = require('./comments')
admin.initializeApp();

const getAllChallenges = require('./src/challenges/get_all_challenges');
const getSingleChallenge = require('./src/challenges/get_single_challenge')
const insertChallenge = require('./src/challenges/insert_challenge')
const insertComment = require('./src/challenges/insert_comment')

exports.getAllChallenges = getAllChallenges;
exports.getSingleChallenge = getSingleChallenge;
exports.insertChallenge = insertChallenge;
exports.insertComment = insertComment;


exports.seedData = functions.https.onRequest((request, response) => {
    data.forEach(function(obj) {
        admin.firestore().collection("challenges").add({
            title: obj.title,
            email: obj.email,
            nickname: obj.name,
            text: obj.text
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    });

    comments.forEach(function(obj) {
        admin.firestore().collection("comments").add({
            email: obj.email,
            nickname: obj.name,
            text: obj.text
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    });

    response.send('Job Done')
})