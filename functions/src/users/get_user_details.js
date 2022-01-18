const functions = require("firebase-functions");
const admin = require("firebase-admin");


const getUser = async function getUser(uid) {
    const query = await admin.firestore().collection("users").doc(uid).get();
    return {
        ...query.data(),
        id: query.id,
    };
}

/*
    Gets the User object associated to auth.uid
    PARAMS:
        none
    RETURN:
        {
            // the data of a user object
        }
    THROWS:
        if auth.uid is not set
*/
exports.default = functions.https.onCall(async(_, context) => {

    let user = await getUser(context.auth.uid);

    console.log(user);

    return user;
});