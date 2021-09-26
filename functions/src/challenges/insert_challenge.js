const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { z } = require('zod');
const generateUniqueId = require("../tools/generate_unique_id");

const insertChallenge = functions.https.onCall(async (data) => {    
    const mySchema = z.object({
        text: z.string().min(1),
        title: z.string().min(1),
        email: z.string().min(1),
        nickname: z.string().min(1),
    });

    const InputData = mySchema.parse(data);

    const uid = await generateUniqueId('challenges', data.title);

    await admin.firestore().collection('challenges').doc(uid).set(InputData);
});

module.exports = insertChallenge;