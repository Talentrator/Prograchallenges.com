const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { z } = require('zod');
const generateUniqueId = require("../tools/generate_unique_id");
const { getTimeStampOfNow } = require("../tools/get_time_stamp_of_now");

const insertChallenge = functions.https.onCall(async(data) => {
    const mySchema = z.object({
        title: z.string().min(1),
        text: z.string().min(1),
        email: z.string().min(1),
        nickname: z.string().min(1),
        programmingLanguage: z.string().min(1),
        difficulty: z.string().min(1),
        boilerplate: z.string(),
        unitTest: z.string(),
        exampleSolution: z.string(),
    });

    const inputData = mySchema.parse(data);
    const uid = await generateUniqueId('challenges', data.title);
    await admin.firestore().collection('challenges').doc(uid).set({...inputData, creationTime: getTimeStampOfNow(), score: 0, votes: 0 });
    return uid;
});

module.exports = insertChallenge;