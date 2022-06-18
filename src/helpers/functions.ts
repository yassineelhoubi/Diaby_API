import { v4 as uuidv4 } from 'uuid';

export const generatePatientCode = (fullName, length) => {
    const today = new Date();
    const date = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`
    const random = uuidv4();

    const generatedString = `${fullName}${date}${random}`;

    let result = ' ';
    const generatedStringLength = generatedString.length;
    for (let i = 0; i < length; i++) {
        result += generatedString.charAt(Math.floor(Math.random() * generatedStringLength));
    }

    return result;
}