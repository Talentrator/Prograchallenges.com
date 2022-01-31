const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp();

const getAllChallenges = require('./src/challenges/get_all_challenges');
const getQuestions = require('./src/questions/get_questions');
const getSingleChallenge = require('./src/challenges/get_single_challenge')
const insertChallenge = require('./src/challenges/insert_challenge')
const insertQuestion = require('./src/questions/insert_question')
const insertComment = require('./src/challenges/insert_comment')
const vote = require("./src/votes/insert_vote");
const createUser = require("./src/users/create_new_user").default;
const getUserDetails = require("./src/users/get_user_details").default;

exports.getAllChallenges = getAllChallenges;
exports.getQuestions = getQuestions;
exports.getSingleChallenge = getSingleChallenge;
exports.insertChallenge = insertChallenge;
exports.insertQuestion = insertQuestion;
exports.insertComment = insertComment;
exports.vote = vote;
exports.createUser = createUser;
exports.getUserDetails = getUserDetails;

exports.RunCode = require('./src/code/run_code').default;
exports.EvaluateChallenge = require('./src/code/evaluate_challenge').default;