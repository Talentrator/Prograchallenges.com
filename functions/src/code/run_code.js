const functions = require("firebase-functions");
const { evaluateCode } = require("../tools/code_evaluation");
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
  const {code, lang } = data;

  return evaluateCode(code, lang);
}

module.exports = functions.https.onCall(runCode);
