const functions = require("firebase-functions");
const admin = require('firebase-admin');
const tio = require('tio.js');

async function evaluateCode (code, lang, unitTest) {
  const testingCode = `${code}
${unitTest}`;
  const result = await tio(testingCode, lang);
  return result.output;
};


/**
 *
 * Runs code using the TIO-infrastructure
 * @memberOf CloudFunctions.tests
 * @param { String } code the code provided by the applicant
 * @param { String } lang the programming language code is in
 *
 * @return { String } The output of the execution
 * @async
 * 
 */

async function runCode(data) {
  const {challengeId, code, lang} = data;

  challenge = (await admin.firestore().collection('challenges').doc(challengeId).get()).data();

  return evaluateCode(code, lang, challenge.unitTest);
}

exports.default = functions.https.onCall(runCode);
