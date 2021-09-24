const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { z } = require('zod');

const insertChallenge = functions.https.onCall(async (data) => {    
    const mySchema = z.object({
        text: z.string().min(1),
        title: z.string().min(1),
        email: z.string().min(1),
        nickname: z.string().min(1),
    });

    const InputData = mySchema.parse(data);

    // please make the id of the challenge-document be similiar to the title
    // so that we can have urls that look like
    // pc.com/challenge/implement-for-loop
    // A solution for this was already implemented in create_new_user.js, please, heavily reuse the code
    await admin.firestore().collection('challenges').add(InputData);
});

module.exports = insertChallenge;