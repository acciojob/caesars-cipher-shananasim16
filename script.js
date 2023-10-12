function decodeROT13() {
    const inputText = document.getElementById('input').value;
    const decodedText = rot13(inputText);
    document.getElementById('output').value = decodedText;
}

function rot13(encodedText) {
    return encodedText.replace(/[A-Z]/g, (char) => {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
    });
}


 