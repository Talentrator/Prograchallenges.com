const admin = require('firebase-admin');
admin.initializeApp();

const getAllChallenges = require('./src/challenges/get_all_challenges');
const getSingleChallenge = require('./src/challenges/get_single_challenge');
const insertChallenge = require('./src/challenges/insert_challenge');
const insertComment = require('./src/challenges/insert_comment');
const RunCode = require ('./src/code/run_code');
const EvaluateChallenge = require ('./src/code/evaluate_challenge');

exports.getAllChallenges = getAllChallenges;
exports.getSingleChallenge = getSingleChallenge;
exports.insertChallenge = insertChallenge;
exports.insertComment = insertComment;
exports.RunCode = RunCode;
exports.EvaluateChallenge = EvaluateChallenge;