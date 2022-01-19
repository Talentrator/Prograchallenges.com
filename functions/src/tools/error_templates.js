/**
 * 
 * @param {string} message The error message to show
 * @param {string} code the error code of the error
 * @returns Object
 */
function generateError(message, code = "") {
    return {
        "errorInfo": {
            code,
            message
        }
    }
}

module.exports = {
    generateError
};