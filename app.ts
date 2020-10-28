let userInput: unknown;
let userName: string;

userInput = 5;
userName = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number) {
    throw { message: message, errCode: code }
}

generateError('An error occured!', 500);

