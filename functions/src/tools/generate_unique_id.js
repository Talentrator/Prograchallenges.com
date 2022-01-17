const { sanitizeSlug, newId, idExistsInDb } = require('./unique_id_functions');

/**
 * Generates a unique UId for an object which is then going to be used as a slug
 * Will by default try to use the provided Id.
 * @param {string} db Name of the databsase collection
 * @param {string} slugName the expected id of the new object
 * @async
 */
async function generateUniqueId(db, slugName) {
    const slug = sanitizeSlug(slugName);
    if (!(await idExistsInDb(db, slug))) return slug;
    return newId(db, slug, 1);
};

module.exports = generateUniqueId