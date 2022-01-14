/**
 *
 * Creates a new users. Signs the user up with auth, stores the data into the database
 * @memberOf CloudFunctions.challenges.helpers
 * @param { Object } challenge the challenge
 *
 * @return { Object } a challenge object with only the necessary fields inside
 *
 */
exports.default = (challenge) => ({
    title: challenge.title,
    text: challenge.text,
    email: challenge.email,
    nickname: challenge.nickname,
    programmingLanguage: challenge.programmingLanguage,
    boilerplate: challenge.boilerplate,
    score: challenge.score || 0,
    votes: challenge.votes || 0,
    tags: challenge.tags || [],
})