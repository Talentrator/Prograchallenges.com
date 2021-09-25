const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { z } = require('zod');
const generateUniqueId = require("../tools/generate_unique_id").default;

const insertChallenge = functions.https.onCall(async (data) => {    
    const mySchema = z.object({
        text: z.string().min(1),
        title: z.string().min(1),
        email: z.string().min(1),
        nickname: z.string().min(1),
    });

    const InputData = mySchema.parse(data);

    const uid = generateUniqueId('challenges', data.title)

    await admin.firestore().collection('challenges').add({uid, ...InputData});
});

module.exports = insertChallenge;