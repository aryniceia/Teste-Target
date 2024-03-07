//Questão 2

function fibonacci(number) {
    //Definir os primeiros números da sequência
        first = 0;
        second = 1;

    if (number === 0 || number === 1) {
        return true;
    }

    while (second <= number) {
        if (second === number) {
            return true;
        }
        //próximo número da sequência
        next = first + second;

        first = second;
        second = next;
    }
    return false;
}

// Número específico
const numberToCheck = 42;
const result = fibonacci(numberToCheck);

if (result) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}