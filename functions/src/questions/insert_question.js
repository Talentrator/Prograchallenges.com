const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { z } = require('zod');
const { getTimeStampOfNow } = require("../tools/get_time_stamp_of_now");

const answerOptions = z.object({
    A: z.string(),
    B: z.string(),
    C: z.string(),
    D: z.string(),
})

const insertQuestion = functions.https.onCall(async(data) => {
    const mySchema = z.object({
        question: z.string().min(1),
        answers: answerOptions,
        username: z.string().min(1),
        programmingLanguage: z.string().min(1),
        difficulty: z.string().min(1),
        correctAnswer: z.string(),
        score: z.number().int().gte(1),
        time: z.number().int().gte(1),
    });

    const inputData = mySchema.parse(data);
    return await admin.firestore().collection('questions').doc().set({...inputData, creationTime: getTimeStampOfNow() });
});

module.exports = insertQuestion;