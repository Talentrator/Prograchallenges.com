const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { z } = require('zod');
const { generateError } = require("../tools/error_templates");

const voteSchema = z.object({
    entityId: z.string(),
    votes: z.number().int(),
    userId: z.string()
});

const collection = "votes";

async function userAlreadyVoted(documentId, userId) {
    let votesEntity = await (await getVotesEntityRef(documentId)).get();

    return votesEntity.exists && votesEntity.data().votes.some(vote => vote.votedBy == userId);
}

async function getVotesEntityRef(documentId) {
    return await admin.firestore().collection(collection).doc(documentId);
}

async function insertVote({ entityId, votes, userId }) {
    const votesEntity = await getVotesEntityRef(entityId);
    votesEntity.set({
        total_votes: admin.firestore.FieldValue.increment(+votes),
        votes: [{ votedBy: userId, votes }]
    }, { merge: true });
}

/**
 * Inserts votes to the votes collection
 * @param {string} entityId Id of the entity that was voted on i.e challenge or comment
 * @param {Number} votes the votes to increment with 
 * @param {string} userId the id of the user who voted
 * @async
 */

const vote = functions.https.onCall(async({ entityId, userId, votes = 1 }) => {

    const inputData = voteSchema.parse({ entityId, userId, votes })

    if (await userAlreadyVoted(inputData.entityId, inputData.userId)) return generateError("You have already voted");

    return await insertVote(inputData);
});

module.exports = vote;