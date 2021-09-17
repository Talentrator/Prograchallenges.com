const admin = require("firebase-admin");

/**
 * returns a Timestamp-object of the current time
 * @returns {Timestamp}
 */
exports.getTimeStampOfNow = function getTimeStampOfNow() {
  return admin.firestore.Timestamp.now();
};
