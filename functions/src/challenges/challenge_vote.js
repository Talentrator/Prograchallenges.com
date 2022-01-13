const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { z } = require('zod');
const { adminUpdateChallenge } = require('./update_challenge');

const challengeVote = functions.https.onCall(async({ challengeId, votes = 1 }) => {
    const mySchema = z.object({
        challengeId: z.string().min(1),
        votes: z.number().int(),
    })

    const inputData = mySchema.parse({ challengeId, votes })

    return adminUpdateChallenge(inputData.challengeId, { votes: admin.firestore.FieldValue.increment(votes) });
})

module.exports = challengeVote;