const admin = require('firebase-admin')

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

module.exports = {
    sanitizeSlug,
    newId,
    idExistsInDb
}