const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp();

const getAllChallenges = require('./src/challenges/get_all_challenges');
const getSingleChallenge = require('./src/challenges/get_single_challenge')
const insertChallenge = require('./src/challenges/insert_challenge')
const insertComment = require('./src/challenges/insert_comment')
const challengeVote = require("./src/challenges/challenge_vote");

exports.getAllChallenges = getAllChallenges;
exports.getSingleChallenge = getSingleChallenge;
exports.insertChallenge = insertChallenge;
exports.insertComment = insertComment;
exports.challengeVote = challengeVote;
exports.RunCode = require('./src/code/run_code').default;
exports.EvaluateChallenge = require('./src/code/evaluate_challenge').default;