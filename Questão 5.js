//Questão 5

function inverter(string) {
    invertido = '';

    for (let i = string.length - 1; i >= 0; i--) {
        invertido+= string[i];
    }
    return invertido;
}

string = "12345678910";
invertido = inverter(string);
console.log("String original:", string);
console.log("String invertida:", invertido);