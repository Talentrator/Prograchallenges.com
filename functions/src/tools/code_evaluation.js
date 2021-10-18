const tio = require("tio.js");

exports.evaluateCode = async (code, lang) => {
  const result = await tio(code, lang);
  return result.output;
};
