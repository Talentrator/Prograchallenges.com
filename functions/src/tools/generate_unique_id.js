async function idExistsInDb(db, slug) {
  const ref = admin.firestore().collection(db);
  const res = await ref.doc(slug).get();
  return res.exists;
}

async function newId(db, slug, i) {
  const id = i + 1;
  if (!(await idExistsInDb(db, `${slug}-${id}`))) return `${slug}-${id}`;
  return newId(db, slug, id);
}

function sanitizeSlug(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\W+/g, " ")
    .replace(/ /g, "-");
}

/**
 * Generates a unique UId for an object which is then going to be used as a slug
 * Will by default try to use the provided Id.
 * @param {string} db Name of the databsase collection
 * @param {string} slugName the expected id of the new object
 * @async
 */
exports.generateUniqueId = async function generateUniqueId(db, slugName) {
  const slug = sanitizeSlug(slugName);
  if (!(await idExistsInDb(db, slug))) return slug;
  return newId(db, slug, 1);
};
