const functions = require('firebase-functions')
const { z } = require('zod');
const { userAlreadyVoted, insertVote } = require("../tools/voting_functions")
const { generateError } = require("../tools/error_templates");

const voteSchema = z.object({
    entityId: z.string(),
    votes: z.number().int(),
    userId: z.string()
});


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