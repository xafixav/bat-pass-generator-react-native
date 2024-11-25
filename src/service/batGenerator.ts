const generateRandomText = (num: number) => {
    const arrayOfBytes = [];
    for (let i = num; i > 0; i--) {
        arrayOfBytes.push(Math.floor(Math.random() * (126 - 32 + 1)) + 32)
    }
    const bytes = new Uint8Array(arrayOfBytes);
    const textDecoder = new TextDecoder("utf-8")
    const text = textDecoder.decode(bytes);

    return text;
}

export {
    generateRandomText
};