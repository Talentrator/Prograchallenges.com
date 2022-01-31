const admin = require('firebase-admin');

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

module.exports = {
    userAlreadyVoted,
    getVotesEntityRef,
    insertVote
}