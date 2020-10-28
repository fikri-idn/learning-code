var userInput;
var userName;
userInput = 5;
userName = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errCode: code };
}
generateError('An error occured!', 500);
