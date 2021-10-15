
/**
 * Changes a text to a displayable text in HTML. \n are replaced with breaks, spaces with nbsp
 * @param { String } text 
 * @retursn { String } Displayble text
 */
export default (text) => text.replaceAll("\n", "<br>").replaceAll(" ", "&nbsp;");