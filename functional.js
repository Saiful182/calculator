function buttonClick(buttonName) {
    const displayValue = document.getElementById('display').innerText;
    if (parseFloat(displayValue) === 0) {
        const sevenValue = document.getElementById(buttonName).innerText;
        document.getElementById('display').innerText = sevenValue
    }
    else {
        const display = document.getElementById('display').innerText;
        const sevenValue = document.getElementById(buttonName).innerText;
        const newDisplay = display + sevenValue;
        document.getElementById('display').innerText = newDisplay;
    }
    return document.getElementById('display').innerText;
}

document.getElementById('seven').addEventListener('click', function () {
    const sevenValue = buttonClick('seven');
})