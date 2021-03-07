
function updateInput(newValue, clear = false) {
    let div = document.getElementById('data');

    div.value = clear ? newValue : `${div.value}${newValue}`;
}

function printOperator(data) {
    updateInput(` ${data.value} `);
}

function printNumber(data) {
    updateInput(data.value);
}

function clearInput() {
    updateInput('', true);
}

function printOperation() {
    let data = document.getElementById('data').value;
    let array = validateOperator(data.split(' '));
    updateInput(array, true);
}

function validateOperator(arrayData) {
    let resultado;
    let numero1,numero2;

    numero1 = Number(arrayData[0]);
    numero2 = Number(arrayData[2]);

    switch (arrayData[1]) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2; 
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
    }  

    return resultado;

}