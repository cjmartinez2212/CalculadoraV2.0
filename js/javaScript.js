
function updateInput(newValue, clear = false) {
    var div = document.getElementById('data');

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
    var data = document.getElementById('data').value;
    var array = validateOperator(data.split(' '));
    updateInput(array, true);
}

function validateOperator(arrayData) {
    var resultado;
    var numero1,numero2;

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