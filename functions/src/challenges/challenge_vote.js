const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { z } = require('zod');
const { adminUpdateChallenge } = require('./update_challenge');

const VOTE_METHODS = ['upvote', 'downvote']

const challengeVote = functions.https.onCall(async({ challengeId, method = VOTE_METHODS[0], votes = 1 }) => {
    const mySchema = z.object({
        challengeId: z.string().min(1),
        method: z.enum(VOTE_METHODS),
        votes: z.number().min(1),
    })

    const InputData = mySchema.parse({ challengeId, method, votes })

    votes = method === VOTE_METHODS[0] ? votes : 0 - votes

    return adminUpdateChallenge(InputData.challengeId, { votes: admin.firestore.FieldValue.increment(votes) });
})

module.exports = challengeVote;