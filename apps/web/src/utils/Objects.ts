export const ItemStateTyes = {
    Text: 'Text',
    Element: 'Element',
    Upload: 'Upload'
}

export const Elements = {
    Button: 'Button',
    Input: 'Input',
    AddonInput: 'AddonInput'
}

export const getString = (inputString: string) => {
    const match = inputString.match(/^([a-zA-Z]+)(\d+)$/);

    if (match) {
        const word = match[1]; // Extracted word
        const number = parseInt(match[2], 10); // Extracted number as an integer
        return { word, number };
    } else {
        return { word: "Invalid input", number: NaN }; // Handle invalid input
    }
}

export const countItemInArray: (array: string[], item: string) => number = (array, item) => {
    let count = 0;
    array.forEach(element => {
        const word = getString(element);
        if (word.word === item) {
            count++;
        }
    });
    return count;
}

export const BACKEND_URL = 'http://localhost:3000';