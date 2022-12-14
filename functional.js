function buttonClick(buttonName) {
    const displayValue = document.getElementById('display').innerText;
    if (parseFloat(displayValue) === 0) {
        const sevenValue = document.getElementById(buttonName).innerText;
        document.getElementById('display').innerText = sevenValue;
    }
    else {
        const display = document.getElementById('display').innerText;
        const sevenValue = document.getElementById(buttonName).innerText;
        const newDisplay = display + sevenValue;
        document.getElementById('display').innerText = newDisplay;
    }
    return document.getElementById('display').innerText;
}

function getPriviosNumber() {
    const priviousNumberString = document.getElementById('display').innerText;
    const priviousNumbers = parseInt(priviousNumberString);
    return priviousNumbers;
}

function symbolManipulation(symbol) {
    if (symbol === 'plus') {
        document.getElementById('display').innerText = '+';
    }
    else if (symbol === 'minus') {
        document.getElementById('display').innerText = '-';
    }
    else if (symbol === 'multi') {
        document.getElementById('display').innerText = 'X';
    }
    else if (symbol === 'division') {
        document.getElementById('display').innerText = '/';
    }
    else {
        document.getElementById('display').innerText = '%';
    }
    return document.getElementById('display').innerText;
}

document.getElementById('seven').addEventListener('click', function () {
    const sevenValue = buttonClick('seven');
});
document.getElementById('eight').addEventListener('click', function () {
    const sevenValue = buttonClick('eight');
});
document.getElementById('nine').addEventListener('click', function () {
    const sevenValue = buttonClick('nine');
});

document.getElementById('six').addEventListener('click', function () {
    const sevenValue = buttonClick('six');
});
document.getElementById('four').addEventListener('click', function () {
    const sevenValue = buttonClick('four');
});
document.getElementById('five').addEventListener('click', function () {
    const sevenValue = buttonClick('five');
});
document.getElementById('one').addEventListener('click', function () {
    const sevenValue = buttonClick('one');
});
document.getElementById('two').addEventListener('click', function () {
    const sevenValue = buttonClick('two');
});
document.getElementById('three').addEventListener('click', function () {
    const sevenValue = buttonClick('three');
});
document.getElementById('zero').addEventListener('click', function () {
    const sevenValue = buttonClick('zero');
});
document.getElementById('f-braket').addEventListener('click', function () {
    const sevenValue = buttonClick('f-braket');
});
document.getElementById('e-braket').addEventListener('click', function () {
    const sevenValue = buttonClick('e-braket');
});
document.getElementById('percentage').addEventListener('click', function () {
    const sevenValue = symbolManipulation('percentage');
});
document.getElementById('multi').addEventListener('click', function () {
    const sevenValue = symbolManipulation('multi');
});
document.getElementById('plus').addEventListener('click', function () {
    const sevenValue = symbolManipulation('plus');
});
document.getElementById('minus').addEventListener('click', function () {
    const sevenValue = symbolManipulation('minus');
});
document.getElementById('point').addEventListener('click', function () {
    const sevenValue = buttonClick('point');
});
document.getElementById('division').addEventListener('click', function () {
    const sevenValue = symbolManipulation('division');
});

document.getElementById('equal').addEventListener('click', function () {
    const displayValue = document.getElementById('display').innerText;
    console.log(displayValue);
    const convertedValue = parseInt(displayValue, 100);
    console.log(convertedValue);

});

document.getElementById('cancel').addEventListener('click', function () {
    const displayValue = document.getElementById('display').innerText;
    const newDisplay = displayValue.slice(0, -1);
    document.getElementById('display').innerText = newDisplay;
});