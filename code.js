const morseCodeX = {
    'A': '÷=', 'B': '=÷÷÷', 'C': '=÷=÷', 'D': '=÷÷', 'E': '÷', 'F': '÷÷=÷', 
    'G': '==÷', 'H': '÷÷÷÷', 'I': '÷÷', 'J': '÷===', 'K': '=÷=', 'L': '÷=÷÷', 
    'M': '==', 'N': '=÷', 'O': '===', 'P': '÷==÷', 'Q': '==÷=', 'R': '÷=÷', 
    'S': '÷÷÷', 'T': '=', 'U': '÷÷=', 'V': '÷÷÷=', 'W': '÷==', 'X': '=÷÷=', 
    'Y': '=÷==', 'Z': '==÷÷', '1': '÷====', '2': '÷÷===', '3': '÷÷÷==', 
    '4': '÷÷÷÷=', '5': '÷÷÷÷÷', '6': '=÷÷÷÷', '7': '==÷÷÷', '8': '===÷÷', 
    '9': '====÷', '0': '====='
};

const latinCodeX = {};
for (const key in morseCodeX) {
    latinCodeX[morseCodeX[key]] = key;
}

function translateToMorse() {
    let inputText = document.getElementById("inputText").value.toUpperCase();
    let outputText = "";
    for (let char of inputText) {
        if (morseCodeX[char]) {
            outputText += morseCodeX[char] + " ";
        } else {
            outputText += char;
        }
    }
    document.getElementById("outputText").value = outputText.trim();
}

function translateToLatin() {
    let inputText = document.getElementById("inputText").value.trim();
    let words = inputText.split(" ");
    let outputText = "";
    for (let word of words) {
        if (latinCodeX[word]) {
            outputText += latinCodeX[word];
        } else {
            outputText += word;
        }
    }
    document.getElementById("outputText").value = outputText.trim();
}

function clearInput() {
    document.getElementById("inputText").value = "";
}

function clearOutput() {
    document.getElementById("outputText").value = "";
}

function copyText() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
}